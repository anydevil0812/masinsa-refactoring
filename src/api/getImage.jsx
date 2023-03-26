import axios from "axios";

export const getImage = async ({ maskId, setImages }) => {
  const response = await axios.get(
    `http://35.216.122.45:8080/mask/image?maskId=${maskId}`
  );

  setImages(response.data.result);
};
