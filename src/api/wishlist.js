import axios from "axios";

// 찜 정보 가져오기
export const getWishlist = async (memberId, setWishList) => {
  if (memberId) {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/wishlist?memberId=${memberId}&page=1&size=100`
      )
      .then((response) => setWishList(response.data));
  }
};

// 찜 등록
export const postWishlist = async (memberId, maskId, isWish, setIsWish) => {
  const response = axios
    .post(`${process.env.REACT_APP_BASE_URL}/wishlist`, {
      memberId: memberId,
      maskId: maskId,
    })
    .catch(function (error) {
      if (error.response) {
        if (error.response.status === 500) {
          console.log("요청 잘못됨");
        }
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    })
    .then((response) => {
      if (response.data.message === "이미 찜 되어있는 마스크입니다.") {
        setIsWish(true);
      }
    });

  return response;
};

// 찜 수정
export const putWishlist = async (memberId, maskId) => {
  axios.put(
    `${process.env.REACT_APP_BASE_URL}/wishlist?memberId=${memberId}&maskId=${maskId}`
  );
};
