import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import Modal from "react-modal";

const Shop = () => {
    const history = useHistory();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => {
        history.push("/");
        setModalIsOpen(false);
    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <h2>There is no products now</h2>
                <button onClick={closeModal}>OK</button>
            </Modal>
            <h3>Welcome to Shop</h3>
            <button onClick={openModal}>purchase</button>
        </div>
    )
};

export default Shop;
