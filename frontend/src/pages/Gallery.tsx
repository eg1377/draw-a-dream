import React from 'react';
import styled from 'styled-components';
import { Stars } from '../components/stars/Stars';
import Gallery_A from '../components/Gallery_A';
import Carousel from '../components/carousel/Carousel';


const BackGround = styled.div`
background-color: black;
height: 100%;
height: 400vh;
margin-bottom: 10%;
margin-top: 10%;


`

const Gallery: React.FC = () => {

    return (
        <BackGround>
            <Stars />
            <Carousel/>
            <Gallery_A/>
        </BackGround>
    );
};



export default Gallery;