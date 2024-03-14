import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/img/IMG_8199.jpg';
import img2 from '../assets/img/IMG_8242_보정.jpg';
import img3 from '../assets/img/고요한 꿈(A silent dream)_27.3x22.0cm_장지에 채색.jpg';
import img4 from '../assets/img/관계(Relationship)_116.5x91.0cm_장지에 채색_2019.jpg';
import img5 from '../assets/img/낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022.jpg';
import img6 from '../assets/img/낙하(Fall)_20.0x20.0cm_장지에 채색_2022.jpg';
import img7 from '../assets/img/동심(Childhood dream)_72.7x90.9cm_마직천에 채색_2022.jpg';
import img8 from '../assets/img/방을 비운 사이에_53.0x45.0cm_장지에 채색.jpg';
import img9 from '../assets/img/성장_145.5x89.4cm_장지에 채색_2019.jpg';
import img10 from '../assets/img/외로움에 서있는(Loneliness)_45.0x53.0cm_장지에 채색_2022.jpg';
import img11 from '../assets/img/이상향(Utopia)_20.0x20.0cm_장지에 채색_2022.jpg';
import img12 from '../assets/img/평온1(Peaceful)_20.0x20.0cm_장지에 채색.jpg';
import img13 from '../assets/img/평온2(Peaceful)_20.0x20.0cm_장지에 채색.jpg';
import img14 from '../assets/img/평온3(Peaceful)_20.0x20.0cm_장지에 채색2.jpg';
import img15 from '../assets/img/휴식(Rest)_53.0x45.0cm_장지에 채색_2022.jpg';
import img16 from '../assets/img/Utopia.jpg';
import img17 from '../assets/img/Nightmare.png';
import img18 from '../assets/img/IMG_8181.jpg';



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

const sampleImages = [
  {
    src: img1,
    title: "낙원",
    description: "72.7x90.9cm_장지에 채색_2022",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img2,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 2",
    ingredient: "72.7x90.9cm_장지에 채색_2022"

  },
  {
    src: img3,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"

  },
  {
    src: img4,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img5,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img6,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img7,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img8,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img9,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img10,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img11,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img12,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img13,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img14,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img15,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img16,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img17,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },
  {
    src: img18,
    title: "낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022",
    description: "Description for image 1",
    ingredient: "72.7x90.9cm_장지에 채색_2022"
  },



];

const Gallery_A: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<{ src: string, title: string, description: string, ingredient: string } | null>(null);

  const handleImageClick = (image: { src: string, title: string, description: string, ingredient: string }) => {
    setSelectedImage(image);
  }

  const handleCloseModal = () => {
    setSelectedImage(null);
  }

  return (
    <GalleryContainer>
      {sampleImages.map((imageObj, index) => (
        <ImageContainer key={index} onClick={() => handleImageClick(imageObj)}>
          <img src={imageObj.src} alt={`Gallery ${index + 1}`} />
        </ImageContainer>
      ))}
      {selectedImage && (
        <>
          <Overlay onClick={handleCloseModal} />
          <ModalContainer>
            <ModalImage src={selectedImage.src} />
            <ModalTexBox>
              <ModalText>
                <p>{selectedImage.title}</p>
                <p>{selectedImage.description}</p>
                <p>{selectedImage.ingredient}</p>

              </ModalText>
            </ModalTexBox>
          </ModalContainer>
        </>
      )}
    </GalleryContainer>
  );
};



export default Gallery_A;