import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();
  const closingProgrammatically = useRef(false);

  useEffect(() => {
    const modal = dialog.current;
    if (!modal) return;

    if (open && !modal.open) {
      modal.showModal();
      return;
    }

    if (!open && modal.open) {
      closingProgrammatically.current = true;
      modal.close();
    }
  }, [open]);

  function handleDialogClose(event) {
    if (closingProgrammatically.current) {
      closingProgrammatically.current = false;
      return;
    }
    if (onClose) {
      onClose(event);
    }
  }

  return createPortal(
    <dialog
      ref={dialog}
      className={`modal ${className}`}
      onClose={handleDialogClose}
    >
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
