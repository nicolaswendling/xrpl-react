import {ComponentPropsWithoutRef} from "react"

type ModalProps = {
  handleCloseModal: () => void
  title: string
} & ComponentPropsWithoutRef<"dialog">

export const Modal = ({handleCloseModal, title, children}: ModalProps) => {
  return (
    <dialog
      id="modal"
      className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen p-4 bg-slate-950 bg-opacity-70 backdrop-blur-sm"
    >
      <div className="flex flex-col w-full max-w-xl overflow-hidden p-4 bg-white bg-gradient-to-tl from-slate-300 min-h-[350px] rounded-md">
        <header className="p-4 text-center">
          <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
        </header>
        <main className="flex items-center flex-1 px-8 py-8 rounded-md shadow-xl bg-slate-50">
          <div className="m-auto">{children}</div>
        </main>
        <footer className="flex justify-center p-4">
          <button
            onClick={handleCloseModal}
            id="closeModal"
            className="px-8 py-2 transition-colors bg-blue-600 rounded-md text-blue-50 hover:bg-blue-900"
          >
            Fermer
          </button>
        </footer>
      </div>
    </dialog>
  )
}
