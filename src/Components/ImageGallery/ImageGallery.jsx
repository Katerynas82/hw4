import ImageCard from "../ImageCard/ImageCard";
import style from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={style.list}>
      {images.map((image) => (
        <li className={style.item} key={image.id}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
