import axios from "axios";

export const getWishlist = async (memberId, setWishList) => {
  if (memberId) {
    axios
      .get(
        `http://35.216.122.45:8080/wishlist?memberId=${memberId}&page=1&size=100`
      )
      .then((response) => setWishList(response.data));
  }
};
