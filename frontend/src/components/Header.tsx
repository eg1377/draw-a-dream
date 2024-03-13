import styled from "styled-components"
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';


const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  &:hover{
      color: #fff;
    }
`;
const Menu = styled.div`
  font-size: 2rem;

`

const sizes = {
    mobile: '600px',
    tablet: '900px',
    desktop: '1200px',
};

const media = {
    mobile: `(max-width: ${sizes.mobile})`,
    tablet: `(max-width: ${sizes.tablet})`,
    desktop: `(max-width: ${sizes.desktop})`,
};


const HeaderStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    color: #fff;
    padding: 2rem;

.top-bar {
    display: flex;
    gap: 50vw;
    align-items: center;
    background-color: #000000;
    color: #fff;
    /* padding: 1rem; */
}

.top-bar .title {
  color: #ffffff;
  flex: 1;
  font-family: "Lobster", Helvetica;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  position: relative;
}

.top-bar .navbar {
  align-items: center;
  display: flex;
  flex: 0 1 auto;
  gap: 2.5rem;
  justify-content: end;
  position: relative;

  @media ${media.desktop} {
            display: none;
        }
}

.top-bar .tab {
  color: #ffffff;
  font-family: "Lobster", Helvetica;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
  
}

.top-bar .textfield {
  align-items: center;
  border: 2px solid;
  border-color: #ffffff87;
  border-radius: 6px;
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  padding: 8px;
  position: relative;
  width: 12.5rem;
}

.top-bar .text {
  color: #ffffff;
  flex: 1;
  font-family: "Lobster", Helvetica;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -2px;
  position: relative;
}

.top-bar .ic-search {
  height: 20px;
  position: relative;
  font-family: "Lobster", Helvetica;

}
`


const SideMenu = styled.div<{ isOpen: boolean }>`
    z-index: 1000;
    position: fixed;
    top: 65px;
    right: ${props => props.isOpen ? "0" : "-400px"}; // 위치를 오른쪽으로 변경하고, isOpen에 따라 위치를 조절합니다.
    width: 15rem;
    height: 35%;
    background-color: #3f3f3f83;
    color: #fff;
    transition: right 0.3s;  // 애니메이션 효과도 right 속성에 적용합니다.
    padding: 1rem;
    box-shadow: -2px 0 5px rgba(0,0,0,0.5); // 그림자의 위치도 변경합니다.
    border-radius: 20px 0px 0px 20px;



    .buttonList{
      display: flex;
      flex-direction: column;
      margin-top: 5%;
      gap: .3125rem;
      font-size :2rem ;
      font-weight: bolder;
      padding-left: 5%;
}
`;



const Heaber = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen); // 'menuOpen' 상태를 토글합니다.
    };

    // 메뉴 바 외부 클릭을 감지하는 함수
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
        }
    };
    useEffect(() => {
        // 외부 클릭 감지 이벤트 리스너 추가
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // 컴포넌트 언마운트 시 이벤트 리스너 제거
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); // 의존성 배열이 빈 배열이므로, 컴포넌트 마운트 및 언마운트 시에만 실행됩니다.

    // State to manage the visibility of the mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // State to manage if the viewport is mobile size
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1300);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1300);
            if (window.innerWidth > 1300) {
                setIsMobileMenuOpen(false); // Ensure the mobile menu is closed on resize to a non-mobile view
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <>
            <HeaderStyle>
                <header>
                    <div className="top-bar">
                        <div className="title">Draw a Dream</div>
                        {isMobile && (
                            <FaBars onClick={toggleMobileMenu} style={{ cursor: 'pointer',fontSize:'1rem'}} />
                        )}
                        {!isMobile && (
                            <div className="navbar">
                                <StyledLink to='/'>
                                    <Menu className="tab">Home</Menu>
                                </StyledLink>
                                <StyledLink to='/profile' >
                                    <div className="tab">About</div>
                                </StyledLink>
                                <StyledLink to='/gallery'>
                                    <div className="tab">Projects</div>
                                </StyledLink>
                                <div className="tab">Contact</div>
                            </div>
                        )}
                    </div>
                </header>


                <SideMenu isOpen={menuOpen} ref={menuRef}>

                    <div className='buttonList'>
                        <StyledLink to='/'>
                            <p style={{ fontFamily: 'Lobster' }}>Main</p>
                        </StyledLink>
                        <StyledLink to='/profile'>
                            <p style={{ fontFamily: 'Lobster' }}>Profile</p>
                        </StyledLink>
                        <StyledLink to='/gallery'>
                            <p style={{ fontFamily: 'Lobster' }}>Gallery</p>
                        </StyledLink>
                        <StyledLink to='/imageUpload'>
                            <p style={{ fontFamily: 'Lobster' }}>ImageUpload</p>
                        </StyledLink>

                    </div>
                </SideMenu>

            </HeaderStyle>
        </>
    );
};
export default Heaber