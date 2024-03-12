import styled from "styled-components";

const MainTitleStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;


.label {
  height: 31.25rem;
  width: 100%;

  background-color: #000000;
}

.label .text-wrapper {
display: flex;
justify-content: center;
align-items: center;

  color: #ffffff;
  font-family: "Lobster", Helvetica;
  font-size: 12.5rem;
  font-weight: 400;
  height: 31.25rem;
  left: 0;
  letter-spacing: 0;
  line-height: 31.25rem;
  text-align: center;
  text-shadow: .125rem .3125rem .25rem #000000;
  top: 0;
  white-space: nowrap;
  font-family: "Lobster", Helvetica;

}


`


export const MainTitle = () => {
    return (
        <MainTitleStyle>
            <div className="label">
                <div className="text-wrapper"> 꿈을 그립니다.</div>
            </div>
        </MainTitleStyle>
    );
};
