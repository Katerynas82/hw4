// import { useState } from 'react'
import { useEffect, useState } from "react";
import { fetchImages } from "./Components/api";

const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages();

      setImages(data);
    };
    getImages();
  }, []);

  return (
    <div>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <h2></h2>
            <a href={image.url}>
              <img src={image.urls.small} alt={image.alt_descriptions}></img>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
//  axios
//    .get(
//      "https://api.unsplash.com/photos/?client_id=0oF3nb1J595yYJndGrVqpu1GVXu4aNoTMPI4FFirbiI"
//    )
//    .then((res) => console.log(r
