/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for style
AOS.init();


const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

const generateBoxShadows = (n: number) => {
  let value = `${Math.random() * 3000}px ${Math.random() * 3000}px #FFF`;
  for (let i = 2; i <= n; i++) {
    value += `, ${Math.random() * 3000}px ${Math.random() * 3000}px #FFF`;
  }
  return value;
};

const starsSmall = generateBoxShadows(700);
const starsMedium = generateBoxShadows(200);
const starsBig = generateBoxShadows(100);

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    overflow: hidden;
  }
`;

export const Stars = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${starsSmall};
  animation: ${animStar} 50s linear infinite;
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${starsSmall};
  }
`;

export const Stars2 = styled(Stars)`
  width: 2px;
  height: 2px;
  box-shadow: ${starsMedium};
  animation: ${animStar} 100s linear infinite;
  &:after {
    width: 2px;
    height: 2px;
    box-shadow: ${starsMedium};
  }
`;

export const Stars3 = styled(Stars)`
  width: 3px;
  height: 3px;
  box-shadow: ${starsBig};
  animation: ${animStar} 150s linear infinite;
  &:after {
    width: 3px;
    height: 3px;
    box-shadow: ${starsBig};
  }
`;

// 깜박거리는 애니메이션을 정의합니다.
const blinkAnimation = keyframes`
  0%, 20%, 40%, 60%, 80%, 100% {
    opacity: 1;
  }
  10%, 30%, 50%, 70%, 90% {
    opacity: 0.5;
  }
`;


// 'Draw a'의 애니메이션: 점점 어두워지는 효과
const fadeToBlack = keyframes`
  0% {
    color: white;
  }
  100% {
    color: black;
  }
`;

// 'Dream'의 애니메이션: 외곽이 점점 밝아지는 효과
const brightenOutline = keyframes`
  0% {
    text-shadow: none;
  }
  100% {
    text-shadow: 0px 0px 10px rgba(138, 43, 226, 0.7), 0px 1px 20px rgba(138, 43, 226, 0.7);
  }
`;

const DrawA = styled.span`
  cursor: pointer;
  &:hover {
    animation: ${fadeToBlack} 5s forwards;
  }
`;

const Dream = styled.span`
  cursor: pointer;
  &:hover {
    animation: ${brightenOutline} 5s forwards;
  }
`;

export const Title = styled.div`
  height: 110vh;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  color: #FFF;
  text-align: center;
  font-family: 'lato', sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 10px;

  display: inline-block;
  cursor: pointer;
  transition: opacity 0.2s ease;

`;

const Back = styled.div`
  background-color: black; // 배경색은 검은색입니다.
  height: 93.75rem;        // 높이는 93.75rem입니다.

  .title {                 // .title 클래스를 가진 자식 요소에 대한 스타일입니다.
    position: absolute;    // 위치를 절대적으로 지정합니다.
    top: 50%;              // 상단에서 50%의 위치에 있습니다.
    left: 0;               // 좌측에서 0의 위치에 있습니다.
    right: 0;              // 우측에서 0의 위치에 있습니다.

    color: #FFF;           // 글자색은 흰색입니다.
    text-align: center;    // 텍스트는 중앙 정렬입니다.
    font-family: 'Fuggles', sans-serif; // Fallback 폰트도 지정하세요    font-weight: 300;      // 글자 두께는 300입니다.
    font-size: 50px;       // 글자 크기는 50px입니다.
    letter-spacing: 10px;  // 글자 간격은 10px입니다.

    margin-top: -60px;     // 상단 마진은 -60px입니다. 
    padding-left: 10px;    // 좌측 패딩은 10px입니다.

    span {                 // .title 클래스 내부의 span 요소에 대한 스타일입니다.
      background: -webkit-linear-gradient(white, #38495a); // 배경에 선형 그라디언트 효과를 적용합니다.
      -webkit-background-clip: text;  // 배경 클립 효과를 텍스트에 적용합니다.
      -webkit-text-fill-color: transparent; // 텍스트 색상을 투명하게 만듭니다.
    }
  }
`;


const writingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Menu = styled.div`
display: flex;
justify-content: center;
`;


const StyledButton = styled.button`
background-color: transparent;
border: none;
.btn-4 {
  position: relative;
  color: #000000;
  z-index: 2;
  line-height: 40px;
  padding: 10px;
  background-color: transparent;
  border: none;
}
.btn-4:hover{
  border: none;
}
.btn-4:before,
.btn-4:after {
  position: absolute;
  content: "";
  width: 0%;
  height: 0%;
  border: 2px solid;
  z-index: -1;
  transition: all 0.3s ease;
}
.btn-4:before {
  top: 0;
   left: 0;
   border-bottom-color: transparent;
   border-right-color: transparent;
   border-top-color: #ffffff;
   border-left-color: #ffffff;
}
.btn-4:after{
   bottom: 0;
   right: 0;
   border-top-color: transparent;
   border-left-color: transparent;
   border-bottom-color: #ffffff;
   border-right-color: #ffffff;
}
.btn-4:hover:before,
.btn-4:hover:after {
  border-color: #ffffff;
  height: 100%;
  width: 100%;
}`;

const ButtonList = styled.div`
margin-top: 10vh;
display: flex;
justify-content: center;
flex-direction: row;
gap: 6.25rem;

`;


const OnlyStar: React.FC = () => {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css" />
      <Stars />
      <Stars2 />
      <Stars3 />
    </div>
  );
}

export default OnlyStar;

