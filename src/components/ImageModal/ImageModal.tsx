import Modal from "react-modal";
import css from "./ImageModal.module.css";
import {Image} from "../../ts/types";

type ImageModalProps = {
  image: Image | null;
  onClose: () => void;
}

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
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
