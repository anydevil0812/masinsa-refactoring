import axios from "axios";

// 사용자 정보
export const getUserInfo = async ({ accessToken, setUserInfo }) => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/member/new-member`, {
      token: accessToken,
    })
    .then((response) => {
      setUserInfo(response.data.result);
    })
    .catch((e) => alert(e.message));
};
