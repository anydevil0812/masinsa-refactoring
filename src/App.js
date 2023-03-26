import { Outlet } from "react-router-dom";
import RecentView from "./components/RecentView";
import UpBtn from "./components/UpBtn";
import Header from "./components/Header";
import { useState } from "react";
import { UserLoginContext } from "./context/UserLoginContext";
import { Wrapper } from "./styles/OtherStyles";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  return (
    // context를 이용해 전역 상태관리 => 유저 로그인 정보
    <UserLoginContext.Provider
      value={{ setIsLogin, isLogin, setUserInfo, userInfo }}
    >
      <Header />
      <Outlet />
      <RecentView />
      <UpBtn />
    </UserLoginContext.Provider>
  );
}

export default App;
