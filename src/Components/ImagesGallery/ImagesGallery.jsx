import ImageCard from "../ImageCard/ImageCard";

const ImagesGallery = ({images}) => {
  return (
    <div>
      <ul>
        <ImageCard images={images}/>
      </ul>
    </div>
  );
}

export default ImagesGallery