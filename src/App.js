import { Outlet } from "react-router-dom";
import RecentView from "./components/recentView/RecentView";
import UpBtn from "./components/UpBtn";
import Header from "./components/Header";
import { useState } from "react";
import { UserLoginContext } from "./context/UserLoginContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/GlobalStyle";
import theme from "../src/styles/theme";
import variables from "../src/styles/variables";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { getCookie } from "./cookie";
import { CookiesProvider } from "react-cookie";
import { getWishlist } from "./api/wishlist";
import { getUserInfo } from "./api/user";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [wishList, setWishList] = useState();

  // 새로고침 시, 쿠키에서 accessToken이 존재하는 지 확인
  // => 존재한다면 로그인 상태이므로 사용자정보 재요청
  useEffect(() => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      getUserInfo({ accessToken, setUserInfo });
    }
  }, []);

  useEffect(() => {
    if (userInfo) {
      const memberId = userInfo.id;
      getWishlist(memberId, setWishList);
    }
  }, [userInfo]);

  return (
    <CookiesProvider>
      <ThemeProvider theme={{ style: theme, variables }}>
        {/* context를 이용해 전역 상태관리 => 유저 로그인 정보 */}
        <UserLoginContext.Provider
          value={{
            setIsLogin,
            isLogin,
            setUserInfo,
            userInfo,
            wishList,
            setWishList,
          }}
        >
          <GlobalStyle />
          <Header />
          <Nav />
          <Outlet />
          <Footer />
          <RecentView />
          <UpBtn />
        </UserLoginContext.Provider>
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default App;
