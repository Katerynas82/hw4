import { useEffect, useState } from "react";
import { fetchImages } from "./Components/api";
import ImagesGallery from "./Components/ImagesGallery/ImagesGallery";
import Loader from "./Components/Loader/Loader";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage";
// import ImageCard from "./Components/ImageCard/ImageCard";
import LoadMore from "./Components/LoadMore/LoadMore";
import SearchBar from "./Components/SearchBar/SearchBar";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [imageModal, setImageModal] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(page, query);
        setIsLoading(false);
        setImages((prev) => [...prev, ...data]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = topic => {
    setQuery(topic);
    setImages([]);
  };

  return (
    <div>
      <SearchBar setQuery={handleSetQuery}/>
      {images.length > 0 && <ImagesGallery images={images} />}

      <LoadMore handleChangePage={handleChangePage} />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {/* <ImageCard isModal={imageModal} setImageModal={setImageModal} /> */}
    </div>
  );
};

export default App;
//  axios
//    .get(
//      "https://api.unsplash.com/photos/?client_id=0oF3nb1J595yYJndGrVqpu1GVXu4aNoTMPI4FFirbiI"
//    )
//    .then((res) => console.log(r
