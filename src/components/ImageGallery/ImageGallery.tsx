import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface Image {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  handleOpenModal: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  handleOpenModal,
}) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li
          key={image.id}
          onClick={() => handleOpenModal(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
