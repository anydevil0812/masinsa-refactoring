import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../src/pages/NotFound";
import Main from "../src/pages/Main";
import MaskList from "./pages/MaskList";
import About from "./pages/About";
import MyPage from "./pages/MyPage";
import Introduce from "./pages/Introduce";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      { path: "/maskList/:blockingindex", element: <MaskList /> },
      { path: "/about/:maskId/*", element: <About /> },
      { path: "/introduce/masinsa", element: <Introduce /> },
      { path: "/login/masinsa", element: <Login /> },
      { path: "/mypage", element: <MyPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
