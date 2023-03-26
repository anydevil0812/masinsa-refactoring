import axios from "axios";

export const getMainMask = async ({
  sortCol,
  sortOrder,
  setMaskList,
  keyword,
}) => {
  // 처음 렌더링시만 사용!
  // keyword 값이 없을때
  if (keyword === "") {
    if (sortOrder !== "") {
      const response = await axios
        .get(
          `http://35.216.122.45:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}`
        )
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      setMaskList(response.data.result);
    } else {
      const response = await axios
        .get(`http://35.216.122.45:8080/mask/filter/sort?`)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      setMaskList(response.data.result);
    }
  }
};
