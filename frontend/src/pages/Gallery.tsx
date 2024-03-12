import React, { useState } from 'react';
import styled from 'styled-components';

interface Image {
    src: string;
    title: string;
    description: string;
  }

// breakpoint를 정의합니다.
const sizes = {
    mobile: '480px',
    tablet: '1400px',
    desktop: '1400px',
  };
  
  // 미디어 쿼리를 쉽게 사용할 수 있는 helper 객체를 생성합니다.
  const media = {
    mobile: `(max-width: ${sizes.mobile})`,
    tablet: `(max-width: ${sizes.tablet})`,
    desktop: `(max-width: ${sizes.desktop})`,
  };

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin: auto;
  overflow-y: auto;

  @media ${media.tablet} {
    /* grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); */
    gap: 0.5rem;
    padding: 5%;

  }


  @media ${media.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.5rem;
    padding: 5%;

  }
`;

const ImageContainer = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    border-radius: 6px;
  }
  &:hover img {
    transform: scale(1.1);
  }
`;

const ModalImage = styled.img`
  border: 30px solid white;
  border-radius: 6px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  max-width: 80vw;
  max-height: 70vh;


  @media ${media.mobile} {
    max-width: 90vw;
    max-height: 60vh;
  }
`;


const ModalText = styled.div`
  margin-top: 20px;
  color: #f5e8e2; // 부드러운 색상으로 변경
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1.25rem;
  border: 2px solid #f5e8e2; // 테두리 추가
  border-radius: 5px;
  font-family: PretendardVariable; // 고급스러운 글꼴로 변경
  font-weight: bold;
  font-size: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); // 텍스트 그림자 추가
  max-width: 80vw;
  text-align: center;

  white-space: pre-line; // 줄바꿈 문자를 인식하기 위해 추가
  line-height: 2; // 라인 간격 조정

  @media ${media.mobile} {
    font-size: 0.8rem;
    max-width: 90vw;
    padding: 5px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.925); // 반투명한 검은색
  z-index: 999; // ModalContainer보다 한 단계 아래에 위치하도록 z-index 설정
`;


const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;

interface ImageItemProps {
    image: Image;
    onClick: () => void;
  }
  
  const ImageItem: React.FC<ImageItemProps> = ({ image, onClick }) => (
    <ImageContainer onClick={onClick}>
      <img src={image.src} alt={image.title} />
    </ImageContainer>
  );
  
  interface ImageModalProps {
    image: Image;
    onClose: () => void;
  }
  
  const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <ModalImage src={image.src} />
        <ModalText>{image.title}</ModalText>
        <ModalText>{image.description}</ModalText>
      </ModalContainer>
    </>
  );
  
// Overlay, ModalContainer, ModalImage, ModalText 스타일은 동일하게 유지합니다.

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <GalleryContainer>
      {sampleImages.map((imageObj, index) => (
        <ImageItem key={index} image={imageObj} onClick={() => setSelectedImage(imageObj)} />
      ))}
      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </GalleryContainer>
  );
};

export default Gallery;
