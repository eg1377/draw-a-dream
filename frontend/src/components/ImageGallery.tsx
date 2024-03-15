import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


// breakpoint를 정의합니다.
const sizes = {
    mobile: '480px',
    tablet: '2000px',
    desktop: '2000px',
  };
  
  // 미디어 쿼리를 쉽게 사용할 수 있는 helper 객체를 생성합니다.
  const media = {
    mobile: `(max-width: ${sizes.mobile})`,
    tablet: `(max-width: ${sizes.tablet})`,
    desktop: `(max-width: ${sizes.desktop})`,
  };
  

interface Image {
  src: string;
  title: string;
  description: string;
  ingredient: string;
}

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 125rem;
  margin: 5% auto;
  
  @media ${media.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
    gap: 1rem;
    padding: 5%;

  }

  @media ${media.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(9.375rem, 1fr));
    gap: 1rem;
    padding: 5%;

  }
`;



const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);

  }
`;

const ModalContainer = styled.div`

display: flex;
padding: 20px;
justify-content: center;
align-items: flex-start;
gap: 10px;
flex: 1 0 0;
flex-direction: column;
background-color: white;

  position: fixed;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%); 
  z-index: 1000;
  align-items: center;
  cursor: pointer;
`;

const ModalImage = styled.img`
display: flex;
justify-content: center;
align-items: center;
  max-width: 80vw;
  max-height: 80vh;


  @media ${media.mobile} {
    max-width: 90vw;
    max-height: 60vh;
  }
`;

const ModalTexBox = styled.div`

  max-width: 80vw;
  max-height: 80vh;

`


const ModalText = styled.div`
  color: #000000; // 부드러운 색상으로 변경
  padding: 1rem;
  font-family: PretendardVariable; // 고급스러운 글꼴로 변경
  font-weight: bold;
  font-size: 1rem;
  text-align: start;
  white-space: pre-line; // 줄바꿈 문자를 인식하기 위해 추가
  line-height: 3; // 라인 간격 조정



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


// React 컴포넌트 정의
const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // 이미지 로드 함수
  const loadImages = async () => {
    // 예시로 '/uploads' 경로에서 이미지 목록을 가져오는 로직을 구현합니다.
    // 실제로는 백엔드에서 이미지 목록을 제공하는 API 엔드포인트를 호출해야 합니다.
    const response = await fetch('/uploads');
    const imageFiles = await response.json();
    // 이미지 목록을 상태에 설정
    setImages(imageFiles.map((fileName: string) => ({
      src: `/uploads/${fileName}`,
      title: fileName, // 파일 이름을 제목으로 사용
      description: '', // 필요한 경우 설명 추가
      ingredient: '' // 필요한 경우 성분 추가
    })));
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <ImageContainer key={index} onClick={() => setSelectedImage(image)}>
          <img src={image.src} alt={image.title} />
        </ImageContainer>
      ))}
      {selectedImage && (
        <>
          <Overlay onClick={() => setSelectedImage(null)} />
          <ModalContainer>
            <ModalImage src={selectedImage.src} alt={selectedImage.title} />
            {/* 모달에 표시할 내용 추가 */}
          </ModalContainer>
        </>
      )}
    </GalleryContainer>
  );
};

export default ImageGallery;
