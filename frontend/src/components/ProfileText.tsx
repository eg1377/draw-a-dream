import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';

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


const Box = styled.div`
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

margin-top: 8rem;


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



`
const Text = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

line-height: 1.6;

font-family: "Diphylleia", serif;
`
const Text2 = styled.div`

margin-top: 8rem;

line-height: 1.6;

font-family: "Diphylleia", serif;

`


const ProfileText: React.FC = () => {

    return (
        <>
            <Box>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Diphylleia&family=Grandiflora+One&family=Lobster&display=swap')
                </style>
                <Text data-aos="fade-up" data-aos-duration="3000">
                    <h2>안녕하세요 꿈을 그리는 작가 김민솔 입니다.</h2>
                    <h4>우리는 누구나 꿈을 꾸게 됩니다.</h4>
                    <h4>꿈은 우리 개개인이 갖고 있는 소망과 무의식적인</h4>
                    <h4>욕망과 충동이 판타지의 세계로 나타나거나,</h4>
                    <h4>현실에서 느낀 걱정이나 불안,</h4>
                    <h4>개인의 트라우마 등이한편의 스토리로 펼쳐집니다.</h4>
                    <h4>이러한 누구나 꾸는 '꿈' 이라는 주제를 가지고 작업으로 풀어냅니다.</h4>
                </Text>

                <Text2 data-aos="fade-up" data-aos-duration="3000">
                    <h2>작가 이력</h2>
                    <h4>학력</h4>
                    <h5>- 2017.03 ~ 2023.02 덕성여자대학교 동양화과 학사</h5>
                    <h4>전시이력</h4>
                    <h5>- 2021 라메르 갤러리 [온점] 덕성여자대학교 졸업 전시</h5>
                    <h5>- 2022 홍익대학교 현대미술관 [아시아프] 1부</h5>
                    <h5>- 2022 아페르 갤러리 [YELLOW CHIPS MARKET] 기획전</h5>
                    <h5>- 2023 플리옥션 [NEWNESS 해피 프라이스], [NEWNESS 플렉스] 옥션</h5>

                </Text2>


            </Box>

        </>
    );
};
export default ProfileText;
