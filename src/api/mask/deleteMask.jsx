import axios from "axios";

export const deleteMask = async ({ maskId }) => {
  await axios.delete(`http://35.216.122.45:8080/mask`, {
    maskId: { maskId },
  });
};
