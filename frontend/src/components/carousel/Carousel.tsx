// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import your custom styles if needed
import './styles.css';

import styled from 'styled-components';

// Image imports
import img1 from '../../assets/img/IMG_8199.jpg';
import img2 from '../../assets/img/IMG_8242_보정.jpg';
import img3 from '../../assets/img/고요한 꿈(A silent dream)_27.3x22.0cm_장지에 채색.jpg';
import img4 from '../../assets/img/관계(Relationship)_116.5x91.0cm_장지에 채색_2019.jpg';
import img5 from '../../assets/img/낙원(Paradise or Disaster)_72.7x90.9cm_장지에 채색_2022.jpg';
import img6 from '../../assets/img/낙하(Fall)_20.0x20.0cm_장지에 채색_2022.jpg';
import img7 from '../../assets/img/동심(Childhood dream)_72.7x90.9cm_마직천에 채색_2022.jpg';
import img8 from '../../assets/img/방을 비운 사이에_53.0x45.0cm_장지에 채색.jpg';
import img9 from '../../assets/img/성장_145.5x89.4cm_장지에 채색_2019.jpg';
import img10 from '../../assets/img/외로움에 서있는(Loneliness)_45.0x53.0cm_장지에 채색_2022.jpg';
import img11 from '../../assets/img/이상향(Utopia)_20.0x20.0cm_장지에 채색_2022.jpg';
import img12 from '../../assets/img/평온1(Peaceful)_20.0x20.0cm_장지에 채색.jpg';
import img13 from '../../assets/img/평온2(Peaceful)_20.0x20.0cm_장지에 채색.jpg';
import img14 from '../../assets/img/평온3(Peaceful)_20.0x20.0cm_장지에 채색2.jpg';
import img15 from '../../assets/img/휴식(Rest)_53.0x45.0cm_장지에 채색_2022.jpg';
import img16 from '../../assets/img/이상향(Utopia)_90.0×195.0cm_장지에 채색_2021.jpg';
import img17 from '../../assets/img/악몽(Nightmare)_90.0×195.0cm_장지에 채색_2021.jpg';
import img18 from '../../assets/img/IMG_8181.jpg';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

const ImgStayle = styled.div`
width: 31.25rem;
height: 31.25rem;
`

export default function Carousel() {
  // Array of images to be displayed in the Swiper
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18];

  return (
    <>
      <Swiper
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <ImgStayle>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
        </ImgStayle>
      </Swiper>
    </>
  );
}
