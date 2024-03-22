import { useState, useRef, useEffect } from 'react';

export default function Modal({
    isOpen,
    hasCloseBtn = true,
    onClose,
    children,
}) {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef(null);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            handleCloseModal();
        }
    };

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    return (
        <dialog
            ref={modalRef}
            onKeyDown={handleKeyDown}
            className='modal border-2 rounded-xl p-3 bg-gray-200 border-primaryGreen'
        >
            {hasCloseBtn && (
                <div className='flex justify-end'>
                    <button
                        className='modal-close-btn text-white bg-green-700 p-1 rounded-xl'
                        onClick={handleCloseModal}
                    >
                        Close
                    </button>
                </div>
            )}
            {children}
        </dialog>
    );
}
