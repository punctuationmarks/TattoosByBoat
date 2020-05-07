import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

function ModalComponent(props) {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}>
            <Modal.Body>
                <LazyLoadImage effect="blur" src={props.image} className="modal-image" />
                <Button className="primary" variant="outline-dark" onClick={props.onHide}>Close</Button>
            </Modal.Body>
        </Modal>
    );
}

export default ModalComponent;
