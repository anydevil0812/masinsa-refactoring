import axios from "axios";

export const getAnalysis = async ({ maskId, setAnalysisInfo }) => {
  const response = await axios
    .get(`http://35.216.122.45:8080/analysisinfo?maskId=${maskId}`)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });

  setAnalysisInfo(response.data.result);
};
