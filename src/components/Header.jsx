import styled from "styled-components";
import React, { useContext } from "react";
import { UserLoginContext } from "../context/UserLoginContext";
import { BsPersonHearts } from "react-icons/bs";
import { MdLogout, MdLogin } from "react-icons/md";
import { removeCookie } from "../cookie";

function Header() {
  const { userInfo } = useContext(UserLoginContext);

  // 로그아웃 => 세션쿠키, accessToken 삭제
  const handleLogout = () => {
    //user정보 삭제
    removeCookie("accessToken");
    // main 페이지로 이동
    window.location.href = "/";
  };

  console.log(userInfo);

  return (
    <HeaderWrapper>
      <Hedaer>
        {/* 마신사로고 : home버튼 */}
        <a href="/">
          <Img src={`/images/masinsa-logo.png`} alt="masinsa-logo" />
        </a>
        {userInfo ? (
          <Group>
            <Link href="/mypage">
              <Icon>
                <BsPersonHearts />
              </Icon>
              <P>MY PAGE</P>
            </Link>
            <Link onClick={() => handleLogout()}>
              <Icon>
                <MdLogout />
              </Icon>
              <P>LOGOUT</P>
            </Link>
          </Group>
        ) : (
          <Group>
            <Link href="/login/masinsa">
              <Icon>
                <MdLogin />
              </Icon>
              <P>LOGIN</P>
            </Link>
          </Group>
        )}
      </Hedaer>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  background: ${(props) => props.theme.style.lightGray};
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 320px;
  }
`;

const Hedaer = styled.div`
  max-width: 1000px;
  height: 80px;
  ${(props) => props.theme.variables.flex("", "space-between", "center")};
  padding-left: 10px;
  margin: 0px auto;
  @media (max-width: 768px) {
    height: 60px;
  }
`;

const Img = styled.img`
  width: 200px;
  transition: 0.5s ease;
  @media (max-width: 768px) {
    width: 150px;
  }
`;

const Group = styled.div`
  ${(props) => props.theme.variables.flex("", "space-around", "center")};
  position: relative;
`;

const Icon = styled.div`
  font-size: 25px;
`;

const Link = styled.a`
  display: block;
  width: 80px;
  margin: 8px;
  font-size: ${(props) => props.theme.style.Medium};
  font-weight: 700;
  text-align: center;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.style.text};
  transition: 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.style.masinsaColor};
  }
  &:active {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    width: 40px;
    font-weight: 600;
  }
`;

const P = styled.p`
  margin: 0px;
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;
