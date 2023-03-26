import axios from "axios";

export const getKeyword = async ({ keyword }) => {
  await axios.get(`http://35.216.122.45:8080/mask/keyword`, {
    keyword: { keyword },
  });
};
