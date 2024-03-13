import styled from 'styled-components';
import Star from '../components/stars/Stars';
import React, { useState,useEffect } from 'react';

const GlowEffect = styled.div<{ x: number; y: number }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
`;



const MainStyle = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  `

  

const Main = (): JSX.Element => {

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
    
    useEffect(() => {
        // 스크롤 비활성화
        document.body.style.overflow = 'hidden';
    
        return () => {
          // 컴포넌트가 언마운트될 때 스크롤 다시 활성화
          document.body.style.overflow = 'unset';
        };
      }, []);

    return (
        
      <MainStyle>
        <Star/>
        <GlowEffect x={position.x} y={position.y} />
        {positions.map((pos, index) => (
        <GlowEffect key={index} x={pos.x} y={pos.y} style={{ transitionDelay: `${index * 0.05}s` }} />
      ))}

      {/* <MainTitle/> */}
      </MainStyle>
    );
  };
  
export default Main;

