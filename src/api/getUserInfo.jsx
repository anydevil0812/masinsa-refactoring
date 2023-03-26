import axios from "axios";

export const getUserInfo = async ({ accessToken, setUserInfo }) => {
  axios
    .post(`http://35.216.122.45:8080/member/new-member`, {
      token: accessToken,
    })
    .then((response) => {
      setUserInfo(response.data.result);
    })
    .catch((e) => alert(e.message));
};
