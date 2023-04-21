import axios from "axios";

// 마신사 Awards
export const getAwards = async ({ setTopMask }) => {
  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/mask/top3`)
    .then((res) => setTopMask(res.data.result));
};

// 키워드 검색 마스크 & 정렬
export const getSearchMask = async ({ setMaskList, params }) => {
  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/mask/search/sort`, {
      params: params,
    })
    .then((res) => setMaskList(res.data.result));
};

// 마스크 정보
export const getMask = async ({ maskId, setMask }) => {
  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/mask?maskId=${maskId}`)
    .then((res) => setMask(res.data.result))
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });
};

// 마스크 상세 이미지
export const getImage = async ({ maskId, setImages }) => {
  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/mask/image?maskId=${maskId}`)
    .then((res) => setImages(res.data.result));
};

// 분석 정보 가져오기
export const getAnalysis = async ({ maskId, setAnalysisInfo }) => {
  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/analysisinfo?maskId=${maskId}`)
    .then((res) => setAnalysisInfo(res.data.result))
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });
};

// 마스크 클릭 수 증가
export const putClick = async ({ clickMaskId }) => {
  axios.put(
    `${process.env.REACT_APP_BASE_URL}/mask/click?maskId=${clickMaskId}`
  );
};

// 마스크 리스트 페이지 정렬
export const getFilterMask = async ({
  sortCol,
  sortOrder,
  maskKF,
  maskSize,
  maskShape,
  setMaskList,
}) => {
  if (maskKF !== "") {
    if (maskShape !== "") {
      if (maskSize !== "") {
        if (sortCol !== "") {
          // 모든 파라미터가 존재할경우
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}&filterCol3=size&filter3=${maskSize}`
          );
          // console.log("filter1");
          setMaskList(response.data.result);
        } else {
          // 정렬은 존재하지 x 다른 거 모두 존재 (size, shape, KF)
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/mask/filter/sort?filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}&filterCol3=size&filter3=${maskSize}`
          );
          // console.log("filter2");
          setMaskList(response.data.result);
        }
      } else {
        if (sortCol !== "") {
          // size 존재 x 정렬 o ( kf, shape)
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}`
          );
          // console.log("filter3");
          setMaskList(response.data.result);
        } else {
          // size 존재 x 정렬 x ( kf, shape)
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/mask/filter/sort?filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}`
          );
          // console.log("filter4");
          setMaskList(response.data.result);
        }
      }
    } else {
      if (maskSize !== "") {
        if (sortCol !== "") {
          // shape 존재 x size o 정렬 o
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&filterCol1=blocking_index&filter1=${maskKF}&filterCol2=size&filter2=${maskSize}`
          );
          // console.log("filter5");
          setMaskList(response.data.result);
        } else {
          //  shape 존재 x size o 정렬 x
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/mask/filter/sort?filterCol1=blocking_index&filter1=${maskKF}&filterCol2=size&filter2=${maskSize}`
          );
          // console.log("filter6");
          setMaskList(response.data.result);
        }
      } else {
        if (sortCol !== "") {
          // shape, size x 정렬 o
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&filterCol1=blocking_index&filter1=${maskKF}`
          );
          // console.log("filter7");
          setMaskList(response.data.result);
        } else {
          // shape, size x 정렬 x
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/mask/filter/sort?filterCol1=blocking_index&filter1=${maskKF}`
          );
          // console.log("filter8");
          setMaskList(response.data.result);
        }
      }
    }
  }
};
