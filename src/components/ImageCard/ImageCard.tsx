import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: {
    urls: {
      small: string;
    };
    alt_description: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
      <>
        <img src={image.urls.small} alt={image.alt_description}/>
      </>
  );
};

export default ImageCard;
