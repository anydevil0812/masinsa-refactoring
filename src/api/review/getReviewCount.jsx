import axios from "axios";

export const getReviewCount = async ({ maskId, setCount }) => {
  const naverCount = await axios.get(
    `http://35.216.122.45:8080/review/count?maskId=${maskId}&reviewType=naver`
  );

  const memberCount = await axios.get(
    `http://35.216.122.45:8080/review/count?maskId=${maskId}&reviewType=member`
  );

  setCount({
    naver: naverCount.data.result,
    member: memberCount.data.result,
  });
};
