import {useDialogContext} from "./useDialogContext"
import {Modal} from "./Modal"

export const Dialog = () => {
  const {isOpen, closeModal, content} = useDialogContext()
  const {title, message} = content || {}
  return (
    <>
      {isOpen && (
        <Modal handleCloseModal={closeModal} title={title || ""}>
          {message}
        </Modal>
      )}
    </>
  )
}
