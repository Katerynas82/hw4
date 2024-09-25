const ImageCard = ({ images }) => {
  return (
    <div>
      {images.map((image) => (
        <li key={image.id}>
          {/* <h2>{image.description || "Untitled"}</h2> */}

          <a href={image.url}>
            <img
              src={image.urls.small}
              target="_blank"
              alt={image.alt_description || "No description"}
            ></img>
          </a>
        </li>
      ))}
    </div>
  );
};

export default ImageCard;
