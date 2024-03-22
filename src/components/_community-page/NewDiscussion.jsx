import { useState } from 'react';
import Modal from '../shared/Modal/Modal';
import NewDiscussionForms from '../shared/forms/NewDiscForm';

export default function NewDiscussionButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className=' bg-secondaryGreen p-4 mb-2 rounded-full text-center'>
                <button
                    className='text-white font-poppins'
                    onClick={handleOpenModal}
                >
                    + Buat Diskusi
                </button>
            </div>
            {isModalOpen && (
                <Modal
                    isOpen={true}
                    onClose={handleCloseModal}
                    hasCloseBtn={true}
                >
                    <NewDiscussionForms />
                </Modal>
            )}
        </>
    );
}
