import axios from "axios";

export const getSearchMaskSort = async ({
  keyword,
  sortCol,
  sortOrder,
  setMaskList,
}) => {
  if (keyword !== "") {
    if (sortCol !== "") {
      // 정렬이 존재할경우
      const response = await axios.get(
        `http://35.216.122.45:8080/mask/search/sort?keyword=${keyword}&sortCol=${sortCol}&order=${sortOrder}`
      );

      console.log("1 : ", response.data.result);
      setMaskList(response.data.result);
    } else {
      // 정렬이 없을 경우
      const response = await axios.get(
        `http://35.216.122.45:8080/mask/search/sort?keyword=${keyword}`
      );

      console.log("2 : ", response.data.result);
      setMaskList(response.data.result);
    }
  }
};
