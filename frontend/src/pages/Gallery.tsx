import styled from 'styled-components';
import { Stars } from '../components/stars/Stars';
import Gallery_A from '../components/Gallery_A';
import Carousel from '../components/carousel/Carousel';
import React, { useState, useEffect } from 'react';


const BackGround = styled.div`
background-color: black;
height: 100%;
height: 400vh;
margin-bottom: 10%;
margin-top: 10%;
`
const GlowEffect = styled.div<{ x: number; y: number }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
`;



const Gallery: React.FC = () => {

    const [scrollY, setScrollY] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // 최근의 포인터 위치들을 저장할 상태
    const [positions] = useState<Array<{ x: number, y: number }>>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY + window.scrollY,  // 스크롤된 거리를 추가
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        // 스크롤 이벤트 핸들러
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <BackGround>
            <GlowEffect x={position.x} y={position.y} />
            {positions.map((pos, index) => (
                <GlowEffect key={index} x={pos.x} y={pos.y} style={{ transitionDelay: `${index * 0.05}s` }} />
            ))}

            <Stars />
            <Carousel />
            <Gallery_A />
        </BackGround>
    );
};



export default Gallery;