import { Outlet } from "react-router-dom";
import RecentView from "./components/RecentView";
import UpBtn from "./components/UpBtn";
import Header from "./components/Header";
import { useState } from "react";
import { UserLoginContext } from "./context/UserLoginContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/GlobalStyle";
import theme from "../src/styles/theme";
import variables from "../src/styles/variables";
import Nav from "./components/Nav";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  return (
    <ThemeProvider theme={{ style: theme, variables }}>
      {/* context를 이용해 전역 상태관리 => 유저 로그인 정보 */}
      <UserLoginContext.Provider
        value={{ setIsLogin, isLogin, setUserInfo, userInfo }}
      >
        <GlobalStyle />
        <Header />
        <Nav />
        <Outlet />
        <RecentView />
        <UpBtn />
      </UserLoginContext.Provider>
    </ThemeProvider>
  );
}

export default App;
