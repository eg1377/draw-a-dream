import React from 'react';
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
import img1 from '../../assets/img/Paradise.jpg';
import img2 from '../../assets/img/Peaceful1.jpg';
import img3 from '../../assets/img/Peaceful2.jpg';
import img4 from '../../assets/img/Peaceful3.jpg';
import img5 from '../../assets/img/관계(Relationship)_116.5x91.0cm_장지에 채색_2019.jpg';
import img6 from '../../assets/img/Rest.jpg';
import img7 from '../../assets/img/Utopia.jpg';
import img8 from '../../assets/img/Utopia2.jpg';
import img9 from '../../assets/img/고요한 꿈(A silent dream)_27.3x22.0cm_장지에 채색.jpg';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

const ImgStayle = styled.div`
width: 500px;
height: 500px;
`

export default function Carousel() {
  // Array of images to be displayed in the Swiper
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

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
