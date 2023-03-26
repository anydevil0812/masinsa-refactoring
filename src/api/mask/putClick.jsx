import axios from "axios";

/* 상품 클릭 수 증가 */
export const putClick = async ({ clickMaskId }) => {
  axios.put(`http://35.216.122.45:8080/mask/click?maskId=${clickMaskId}`);
};
