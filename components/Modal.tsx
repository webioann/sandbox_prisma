"use client";
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import styles from './modal.module.scss'

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const dialogRef = useRef<React.ElementRef<"dialog">>(null)

    useEffect(() => {
        dialogRef.current?.showModal()
    }, [])

    const closeModal = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) =>
        e.target === dialogRef.current && router.back()

    const close = () => {
        dialogRef.current?.close() && router.back()
    }
    return (
        <dialog
            ref={dialogRef}
            onClick={closeModal}
            onClose={router.back}
            className={styles.modal_dialog}
            >
            <div className={styles.modal_window}>
                {children}
                <button onClick={close}>CANCEL</button>
            </div>
        </dialog>
    )
}
export default Modal;