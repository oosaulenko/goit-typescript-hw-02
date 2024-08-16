import Modal from "react-modal";
import css from "./ImageModal.module.css";
import {Image} from "../../ts/types";

type ImageModalProps = {
  image: Image | null;
  onClose: () => void;
}

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {

  const customStyles: object = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },

    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      backgroundColor: 'transparent',
      border: 0,
    },
  };

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      style={customStyles}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button type="button" className={css.modalCloseButton} onClick={onClose}>
        &times;
      </button>
      {image && (
        <div className={css.modalContent}>
          <img src={image.urls.regular} alt={image.alt_description} />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
