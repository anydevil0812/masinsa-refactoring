import { Outlet } from "react-router-dom";
import RecentView from "./components/RecentView";
import UpBtn from "./components/UpBtn";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <RecentView />
      <UpBtn />
    </>
  );
}

export default App;
