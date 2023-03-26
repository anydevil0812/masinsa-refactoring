import axios from "axios";

export const postWishlist = async (memberId, maskId, setIsWish) => {
  const response = axios
    .post(`http://35.216.122.45:8080/wishlist`, {
      memberId: memberId,
      maskId: maskId,
    })
    .catch(function (error) {
      if (error.response) {
        if (error.response.status == 500) {
          console.log("요청 잘못됨");
        }
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      // console.log(error.config);
    })
    .then((response) => response.data.result)
    .then((data) => setIsWish(data));

  return response;
};
