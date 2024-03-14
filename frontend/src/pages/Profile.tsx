import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for style
import OnlyStar from '../components/stars/Star';
import ProfileText from '../components/ProfileText';
AOS.init();

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

const StyledComponent = styled.div`
  // 기본 스타일
  font-size: 2rem;

  // 태블릿 크기에 대한 스타일
  @media ${media.tablet} {
    font-size: 1.5rem;
  }

  // 모바일 크기에 대한 스타일
  @media ${media.mobile} {
    font-size: 1rem;
  }
`;


const Background = styled.div<{ opacity: number }>`
  background-color: rgba(0, 0, 0, ${props => props.opacity}); // 배경색의 투명도를 조절
  transition: background-color 0.3s ease; // 부드러운 효과를 위한 전환 효과
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* height: 80vh; */
  text-align: center;
`;

const BackgroundAll = styled.div<{ opacity: number }>`
  padding-top: 20vh;
  background: linear-gradient(rgba(0, 0, 0, ${props => props.opacity}), rgba(75, 0, 130, ${props => props.opacity})); 
  height: 500vh;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 10%;

  .AuthorIntroduction{
    display: flex;
    flex-direction: column;
    gap: 15rem;
    justify-content:center;
    text-align: center;
    padding: 5%;
    height: 50vh
  }
  .Explanation{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    padding: 5%;
    height: 20vh
  }

  .SelectBox{
    display: flex;
    flex-direction: column;
  }

  .Select{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    padding: 5%;

  }

`;

export const MainTitle = styled.div`
  margin-top: 3.625rem;
  color: #222;
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 5.75rem;
  font-style: normal;
  font-weight: 800;
  line-height: 6.25rem; 
  @media (max-width: 64rem) {
    font-size: 3rem;
    line-height: 1.2;
  }
`;


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

const ArrowStyle = styled.div<{ opacity: number }>`
  background-color: rgba(0, 0, 0, ${props => props.opacity}); // 배경색의 투명도를 조절
  justify-content: center;
  display: flex;
`;

const MyProfile: React.FC = () => {
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

  // 최대 스크롤 가능한 높이
  const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

  // 스크롤 위치에 따른 투명도 계산
  const opacity = maxScrollY ? 1.2 - Math.min(scrollY / maxScrollY, 1) : 1;

  return <StyledComponent>

    <Background opacity={opacity}>
    <OnlyStar />

      {positions.map((pos, index) => (
        <GlowEffect key={index} x={pos.x} y={pos.y} style={{ transitionDelay: `${index * 0.05}s` }} />
      ))}
      <GlowEffect x={position.x} y={position.y} />
    </Background>
    <ProfileText />
    <ArrowStyle opacity={opacity}></ArrowStyle>


    <BackgroundAll opacity={opacity}>
      {positions.map((pos, index) => (
        <GlowEffect key={index} x={pos.x} y={pos.y} style={{ transitionDelay: `${index * 0.05}s` }} />
      ))}
      <GlowEffect x={position.x} y={position.y} />
      <OnlyStar />
    </BackgroundAll>





  </StyledComponent >;
};

export default MyProfile;

