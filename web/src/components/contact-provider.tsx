"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { ContactDialog } from "@/components/ui/contact-dialog"

interface ContactContextType {
  open: () => void
}

const ContactContext = createContext<ContactContextType>({ open: () => {} })

export function useContact() {
  return useContext(ContactContext)
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ContactContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <ContactDialog open={isOpen} onClose={() => setIsOpen(false)} />
    </ContactContext.Provider>
  )
}
