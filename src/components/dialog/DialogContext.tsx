import {createContext, PropsWithChildren, useState, ReactNode} from "react"

type DialogContextType = {
  isOpen: boolean
  content: ModalType | undefined
  openModal: (content: ModalType) => void
  closeModal: () => void
}

export const DialogContext = createContext<DialogContextType | undefined>(
  undefined
)

export type ModalType = {
  title: string
  message: ReactNode | string
}

export const DialogProvider = ({children}: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<ModalType | undefined>(undefined)

  const openModal = ({title, message}: ModalType) => {
    setContent({title, message})
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <DialogContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        content,
      }}
    >
      {children}
    </DialogContext.Provider>
  )
}
