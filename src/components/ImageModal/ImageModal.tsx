import Modal from "react-modal";
import css from "./ImageModal.module.css";

interface ImageModalProps {
  image: {
    urls: {
      regular: string;
    };
    alt_description: string;
    user: {
      name: string;
    };
    likes: number;
  } | null;
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
          <p>Author: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
