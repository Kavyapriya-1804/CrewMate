import Modal from 'react-bootstrap/Modal';
import "./PageModal.scss";
import cancel from "../../assets/icons/cancel.png";

const PageModal = (props) => {
  const Children = props.children;
  const title = props.title;

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="align-items-center justify-content-center position-relative" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="col-11 text-center">
            {title}
        </Modal.Title>
        <div className="cancel-icon-wrapper position-absolute">
          <img className="cancel-icon w-100" src={cancel} alt="Remove Agent"/>
        </div>
      </Modal.Header>
      <Modal.Body className="px-5 overflow-scroll">
        {Children}
      </Modal.Body>
    </Modal>
  );
}

export default PageModal;
