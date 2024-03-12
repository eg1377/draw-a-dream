import styled from 'styled-components';
// import { MainTitle } from '../components/MainTitle';
import Star from '../components/stars/Stars';
import React, { useEffect } from 'react';

const MainStyle = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  `

const Main = (): JSX.Element => {

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
      {/* <MainTitle/> */}
      </MainStyle>
    );
  };
  
export default Main;

