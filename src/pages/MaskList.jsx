import React, { useState, useEffect } from "react";
import FilterBox from "../components/productList/FilterBox";
import FilterMaskList from "../components/productList/FilterMaskList";
import { MainWrapper } from "../styles/OtherStyles";
import SortChange2 from "../components/productList/SortChange2";
import { FilterSection, FilterMaskListSection } from "../styles/ListPageStyle";
import { useParams } from "react-router-dom";
import { getFilterMaskSort } from "../api/mask/getFilterMaskSort";

function MaskList({ user }) {
  // 로그인시, 로컬에 저장되는 userInfo
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  // kf 파라미터 설정
  const { blockingindex } = useParams();
  const [maskKF, setMaskKF] = useState();

  useEffect(() => {
    if (blockingindex == "OTHER") {
      // AD 랑 덴탈
      setMaskKF("기타");
    } else {
      // KF94 면 94, KF80이면 80 slice
      const kf = blockingindex.slice(-2, blockingindex.length);
      setMaskKF(kf);
    }
  }, []);

  const [maskSize, setMaskSize] = useState("");
  const [maskShape, setMaskShape] = useState("");
  const [sortCol, setSortCol] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // 마스크리스트
  const [maskList, setMaskList] = useState([]);

  // 값이 바뀔때마다 axios로 마스크리스트 요청
  useEffect(() => {
    getFilterMaskSort({
      sortCol,
      sortOrder,
      maskKF,
      maskSize,
      maskShape,
      setMaskList,
    });
  }, [sortCol, sortOrder, maskKF, maskSize, maskShape]);

  // 필터 버튼 상태가 변경되었는 지 확인을 위한 isChange
  const [isChange, setIsChange] = useState(false);

  return (
    <div>
      <MainWrapper>
        {/* 필터가 들어있는 공간 */}
        <FilterSection>
          <FilterBox
            blockingindex={blockingindex}
            setMaskSize={setMaskSize}
            setMaskShape={setMaskShape}
            maskShape={maskShape}
            setIsChange={setIsChange}
          />
        </FilterSection>
        {/* 정렬변경 */}
        <SortChange2
          sortCol={sortCol}
          sortOrder={sortOrder}
          setSortCol={setSortCol}
          setSortOrder={setSortOrder}
          isChange={isChange}
          setIsChange={setIsChange}
        />
        {/* 마스크 리스트공간 */}
        {maskList.length >= 1 ? (
          <>
            <FilterMaskListSection>
              {/* 필터걸린 마스크 리스트 */}
              <FilterMaskList maskList={maskList} userInfo={userInfo} />
              <div
                style={{
                  marginBottom: "10px",
                  fontSize: "10px",
                  fontWeight: "800",
                  // border: "1px solid red",
                  paddingBottom: "10px",
                  paddingTop: "2px",
                }}
              >
                <p>
                  <span style={{ color: "#05735F" }}> MASINSA </span> 내 검색
                  결과가 더 이상 존재하지 않습니다.
                </p>
                <h6 style={{ color: "#0ea654" }}>
                  * 더 많은 마스크가 MASINSA에 모일 수 있도록 노력하겠습니다. *
                </h6>
                <p>방문해주셔서 감사합니다.</p>
              </div>
            </FilterMaskListSection>
          </>
        ) : (
          <>
            <FilterMaskListSection>
              <div style={{ marginTop: "10px" }}>
                <h4>해당 상품에 대한 MASINSA 내 검색 결과가 없습니다.</h4>
                <h6>다른 필터를 선택하여 다시 검색해 주세요</h6>
                <h6 style={{ color: "#0ea654" }}>
                  * 더 많은 마스크가 MASINSA에 모일 수 있도록 노력하겠습니다. *
                </h6>
                <h6>도움을 드리지 못해 죄송합니다.</h6>
              </div>
            </FilterMaskListSection>
          </>
        )}
      </MainWrapper>
    </div>
  );
}

export default MaskList;
