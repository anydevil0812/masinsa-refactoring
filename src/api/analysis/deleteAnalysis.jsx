import axios from "axios";

export const deleteAnalysis = async ({ maskId }) => {
  await axios.delete(`http://35.216.122.45:8080/analysisinfo`, {
    maskId: { maskId },
  });
};
