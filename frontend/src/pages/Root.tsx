import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import React from "react";

// breakpoint를 정의합니다.
const sizes = {
  mobile: '30rem',
  tablet: '87.5rem',
  desktop: '64rem',
};

// 미디어 쿼리를 쉽게 사용할 수 있는 helper 객체를 생성합니다.
const media = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

const StyledMain = styled.div`
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



const Root = (): JSX.Element => {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};

export default Root;