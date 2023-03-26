import axios from "axios";

export const getTop3 = async ({ setTopMask }) => {
  const response = await axios.get("http://35.216.122.45:8080/mask/top3");

  setTopMask(response.data.result);
};
