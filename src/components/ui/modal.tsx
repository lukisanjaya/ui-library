import * as React from "react"
import { cn } from "../../utils/cn"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={onClose}
      />
      <div 
        className={cn(
          "relative z-10 w-full max-w-md rounded-lg bg-background p-6 shadow-lg",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

const ModalHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("mb-4", className)}>
    {children}
  </div>
)

const ModalTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h2 className={cn("text-lg font-semibold", className)}>
    {children}
  </h2>
)

const ModalContent = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("mb-4", className)}>
    {children}
  </div>
)

const ModalFooter = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("flex justify-end gap-2", className)}>
    {children}
  </div>
)

export { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter }