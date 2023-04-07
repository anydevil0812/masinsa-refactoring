import React, { useState, useEffect } from "react";
import SortChange from "../components/productList/SortChange";
import MaskItem from "../components/MaskItem";
import { useParams } from "react-router-dom";
import { getFilterMaskSort } from "../api/mask/getFilterMaskSort";
import { Wrapper } from "../styles/Common";
import ShapeFilter from "../components/productList/ShapeFilter";
import SizeFilter from "../components/productList/SizeFilter";
import CurrentLocation from "../components/productList/CurrentLocation";

function MaskList() {
  // kf 파라미터 설정
  const { blockingindex } = useParams();
  const [maskKF, setMaskKF] = useState();

  useEffect(() => {
    if (blockingindex === "OTHER") {
      // AD 랑 덴탈
      setMaskKF("기타");
    } else {
      // KF94 면 94, KF80이면 80 slice
      const kf = blockingindex.slice(-2, blockingindex.length);
      setMaskKF(kf);
    }
  }, []);

  const [sortCol, setSortCol] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const [filter, setFilter] = useState({
    shape: "",
    size: "",
  });

  // 마스크리스트
  const [maskList, setMaskList] = useState([]);

  // 값이 바뀔때마다 axios로 마스크리스트 요청
  useEffect(() => {
    const maskSize = filter.size;
    const maskShape = filter.shape;
    getFilterMaskSort({
      sortCol,
      sortOrder,
      maskKF,
      maskSize,
      maskShape,
      setMaskList,
    });
  }, [sortCol, sortOrder, maskKF, filter]);

  return (
    <Wrapper>
      {/* 현재 필터 위치 */}
      <CurrentLocation />
      {/* 마스크 형태 */}
      <ShapeFilter filter={filter} setFilter={setFilter} />
      {/* 마스크 사이즈 */}
      <SizeFilter filter={filter} setFilter={setFilter} />
      {/* 정렬변경 */}
      <SortChange
        sortCol={sortCol}
        sortOrder={sortOrder}
        setSortCol={setSortCol}
        setSortOrder={setSortOrder}
      />
      <MaskItem maskList={maskList} />
    </Wrapper>
  );
}

export default MaskList;
