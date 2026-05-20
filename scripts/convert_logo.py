#!/usr/bin/env python3
"""One-time: convert neostronghold PNG logo to SVG with Bezier paths."""

import subprocess, re, sys
from pathlib import Path
from PIL import Image

def convert(input_png, output_svg):
    img = Image.open(input_png).convert("RGBA")
    print(f"  source: {input_png} ({img.width}x{img.height})")

    # threshold to binary mask (white icon on transparent)
    alpha = img.getchannel("A")
    mask = alpha.point(lambda a: 255 if a > 128 else 0, "1")
    binary = mask.convert("L").point(lambda x: 0 if x > 0 else 255, "1")

    # save as PBM (potrace native format)
    pbm = output_svg.with_suffix(".pbm")
    binary.save(pbm)

    # trace to SVG with potrace
    subprocess.run([
        "potrace", "-s",
        "--flat", "--turdsize", "3",
        "-u", "1",
        "-o", output_svg, pbm
    ], check=True, capture_output=True)
    pbm.unlink()

    # post-process: theme-aware SVG
    svg = output_svg.read_text()
    svg = re.sub(r'<!--.*?-->', '', svg, flags=re.DOTALL)
    svg = re.sub(r'width="[^"]*"\s*height="[^"]*"', '', svg)
    svg = re.sub(r'<svg ', f'<svg viewBox="0 0 {img.width} {img.height}" ', svg)
    svg = svg.replace('fill="#000000"', 'fill="currentColor"')
    svg = svg.replace('fill="black"', 'fill="currentColor"')
    output_svg.write_text(svg.strip())

    print(f"  output: {output_svg} ({output_svg.stat().st_size}B)")

if __name__ == "__main__":
    print("neostronghold logo converter\n")
    convert(
        Path("web/public/icon-nobg.png"),
        Path("web/public/logo.svg"),
    )
    print("\ndone.")
