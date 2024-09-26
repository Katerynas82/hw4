import Modal from "react-modal";
import style from "../ImageModal/ImageModal.module.css";

const ImageModal = ({imageModal, setImageModal, largeImageUrl}) => {
    // const customStyles = {className=style.content}
    // };
    
      function closeModal() {
      setImageModal(false);
    }
  return (
    <>
      <div>
        <Modal
          isOpen={imageModal}
          onRequestClose={closeModal}
          style={style.content}
          contentLabel="Image Modal"
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
        >
          <div className={style.overlayModal}>
            <button onClick={closeModal}>close</button>
            {largeImageUrl && (
              <img  src={largeImageUrl} alt="Large view" />
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ImageModal;
