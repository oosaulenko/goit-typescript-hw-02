import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { Image } from '../ts/types';

interface ApiResponse {
  results: Image[];
}

const API_KEY = "hJNrdR-DH3neUnzKR2lxpyzGePwhc-GKihZeq50aWTU";

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  useEffect(() => {
    if (searchTerm === "") return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<ApiResponse>(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query: searchTerm,
              page: page,
              per_page: 12,
              client_id: API_KEY,
            },
          }
        );
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError("Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm, page]);

  const handleSearchSubmit = (query: string) => {
    if (query.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    setSearchTerm(query);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image: Image) => {
    setModalImage(image);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} handleOpenModal={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalImage && (
        <ImageModal image={modalImage} onClose={handleCloseModal} />
      )}
    </div>
  );
}
