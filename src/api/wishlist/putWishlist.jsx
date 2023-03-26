import axios from "axios";

export const putWishlist = async (memberId, maskId) => {
  axios.put(
    `http://35.216.122.45:8080/wishlist?memberId=${memberId}&maskId=${maskId}`
  );
};
