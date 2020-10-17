import React from "react";
import { Modal, Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ModalComponent(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <LazyLoadImage
          effect="blur"
          delayTime="1500"
          src={props.image}
          className="modal-image"
        />
        <Button variant="outline-dark" onClick={props.onHide}>
          X
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default ModalComponent;
