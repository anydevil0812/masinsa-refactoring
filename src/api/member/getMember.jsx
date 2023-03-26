import axios from "axios";

export const getMember = async ({ memberId, setMember }) => {
  const response = await axios.get(
    `http://35.216.122.45:8080/member?memberId=${memberId}`
  );
  setMember(response.data.result);
};
