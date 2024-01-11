import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function DialogModal({ children, onClose }) {

  const dialogRef = useRef(null)

  useEffect(() => {
    dialogRef.current.showModal()
  }, []);

  const handleClose = (e) => {
    e.preventDefault()
    onClose?.()
  }

  return createPortal(<dialog
    ref={dialogRef}
    onCancel={handleClose}
    onClose={handleClose}>
    {children}
  </dialog>, document.body)
}
