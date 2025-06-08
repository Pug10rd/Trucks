import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");

const Gallery = ({ gallery }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => {
    setModalImage(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage(null);
  };

  return (
    <GalleryWrapper>
      {gallery.map((img, index) => (
        <Thumb key={index} onClick={() => openModal(img.original)}>
          <img src={img.thumb} alt={`Thumbnail ${index + 1}`} />
        </Thumb>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={modalStyles}
      >
        <ModalImage src={modalImage} alt="Enlarged camper view" />
        <CloseButton onClick={closeModal}>×</CloseButton>
      </Modal>
    </GalleryWrapper>
  );
};

export default Gallery;

const GalleryWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Thumb = styled.div`
  width: 292px;
  height: 312px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  content: {
    position: "relative",
    inset: "auto",
    padding: 0,
    border: "none",
    borderRadius: "12px",
    maxWidth: "90vw",
    maxHeight: "90vh",
    background: "transparent",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  },
};

const ModalImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-height: 90vh;
  border-radius: 12px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 28px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  line-height: 1;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;
