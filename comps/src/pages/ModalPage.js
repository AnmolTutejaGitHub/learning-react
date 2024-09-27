import Modal from '../Components/Modal';
import Button from '../Components/Button';
import { useState } from 'react';


function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && <Modal onClose={handleClose} actionBar={<Button onClick={handleClose} primary>I Accept</Button>}>
                <p>
                    here is imp agreement
                </p>
            </Modal>}
        </div>
    );
}
export default ModalPage;