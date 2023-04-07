import axios from "axios";

export const getMaskList = async ({
  sortCol,
  sortOrder,
  maskKF,
  maskSize,
  maskShape,
  setMaskList,
}) => {
  axios.get("http://35.216.122.45:8080/mask/filter/sort", {
    params: {
      sortCol: "",
      sortOrder: "",
      maskKF: "",
      maskSize: "",
      maskShape: "",
    },
  });
};
