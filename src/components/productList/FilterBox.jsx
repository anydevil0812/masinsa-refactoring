import React, { useState } from "react";
import {
  ShapeListsSection,
  ShapeBtn,
  SizeBtn,
  SizeBtn_active,
  SizeListsSection,
  MaskShapeImg,
  MaskShapeName,
  MaskShapeName_active,
} from "../../styles/ListPageStyle";
import CurrentLocation from "./CurrentLocation";

function FilterBox({
  blockingindex,
  setMaskSize,
  maskShape,
  setMaskShape,
  setIsChange,
}) {
  // 형태 버튼 눌린 상태 확인
  // 화면 전환이 되어도 "전체" 가 눌려있어야 함
  // default : 전체
  const [shapeState, setShapeState] = useState("전체");

  // 사이즈 버튼 눌린 상태 확인
  const [sizeState, setSizeState] = useState("size-no-active");

  return (
    <div>
      {/* 현재 필터 위치 */}
      <div
        style={{
          width: "auto",
          padding: "10px 15px",
          textAlign: "left",
          fontSize: "12px",
          color: "#2D2D2D",
          border: "3px solid #9A9A9A",
          borderStyle: "none none double",
        }}
      >
        <CurrentLocation />
      </div>
      {/* 마스크 형태 */}
      <ShapeListsSection>
        {/* 전체 */}
        {/* 만약 shape 가 전체이면 해당 kf의 모든 마스크 보여줌 */}
        <ShapeBtn
          onClick={() => {
            // 사이즈, 형태 설정값 모두 지우기
            setMaskShape("");
            setMaskSize("");
            // setSizeState("size-no-active");
            setIsChange(true);
            // 사이즈 상태가 전체가 아니면, 눌렸을때 전체로 변경 !
            if (shapeState !== "전체") {
              setShapeState("전체");
              if (sizeState !== "size-no-active") {
                setSizeState("size-no-active");
                setMaskSize("");
              }
            } else {
              setSizeState("size-no-active");
              setMaskSize("");
            }
          }}
        >
          <MaskShapeImg
            src={`${process.env.PUBLIC_URL}/지구마스크.png`}
          ></MaskShapeImg>
          {shapeState === "전체" ? (
            <MaskShapeName_active>전체</MaskShapeName_active>
          ) : (
            <MaskShapeName>전체</MaskShapeName>
          )}
        </ShapeBtn>
        {/* 새부리형 */}
        <ShapeBtn
          onClick={() => {
            setMaskShape("새부리형");
            setIsChange(true);
            // 사이즈 상태가 새부리형이 아니면, 눌렸을때 새부리형으로 변경 !
            // 만약, 새부리형이면 눌러진 maskSize 초기화 > 새부리형 마스크를 전체 검색하는 것이 됨
            if (shapeState !== "새부리형") {
              setShapeState("새부리형");
              if (sizeState !== "size-no-active") {
                setSizeState("size-no-active");
                setMaskSize("");
              }
            } else {
              setSizeState("size-no-active");
              setMaskSize("");
            }
          }}
        >
          {/* 마스크 이미지 */}
          <MaskShapeImg
            src={`${process.env.PUBLIC_URL}/새부리형.png`}
          ></MaskShapeImg>
          {/* 마스크 형태 */}
          {shapeState === "새부리형" ? (
            <MaskShapeName_active>새부리</MaskShapeName_active>
          ) : (
            <MaskShapeName>새부리</MaskShapeName>
          )}
          {/* <MaskShapeName>새부리형</MaskShapeName> */}
        </ShapeBtn>
        {/* 입체형 */}
        <ShapeBtn
          onClick={() => {
            setMaskShape("입체형");
            setIsChange(true);
            if (shapeState !== "입체형") {
              setShapeState("입체형");
              if (sizeState !== "size-no-active") {
                setSizeState("size-no-active");
                setMaskSize("");
              }
            } else {
              setSizeState("size-no-active");
              setMaskSize("");
            }
          }}
        >
          <MaskShapeImg
            src={`${process.env.PUBLIC_URL}/입체형.png`}
          ></MaskShapeImg>
          {shapeState === "입체형" ? (
            <MaskShapeName_active>입체</MaskShapeName_active>
          ) : (
            <MaskShapeName>입체</MaskShapeName>
          )}
        </ShapeBtn>
        {/* 평면형 */}
        <ShapeBtn
          onClick={() => {
            setMaskShape("평면형");
            setIsChange(true);
            if (shapeState !== "평면형") {
              setShapeState("평면형");
              if (sizeState !== "size-no-active") {
                setSizeState("size-no-active");
                setMaskSize("");
              }
            } else {
              setSizeState("size-no-active");
              setMaskSize("");
            }
          }}
        >
          <MaskShapeImg
            src={`${process.env.PUBLIC_URL}/덴탈형.png`}
          ></MaskShapeImg>
          {shapeState === "평면형" ? (
            <MaskShapeName_active>평면</MaskShapeName_active>
          ) : (
            <MaskShapeName>평면</MaskShapeName>
          )}
        </ShapeBtn>
      </ShapeListsSection>
      {/* 마스크 사이즈 */}
      <SizeListsSection>
        {/* "전체"여도 사이즈 선택 가능 */}

        {sizeState === "대형" ? (
          <SizeBtn_active>▪ 대형</SizeBtn_active>
        ) : (
          <SizeBtn
            onClick={() => {
              setMaskSize("대형");
              setIsChange(true);
              if (sizeState != "대형") {
                setSizeState("대형");
              }
            }}
          >
            ▪ 대형
          </SizeBtn>
        )}
        {sizeState === "중형" ? (
          <SizeBtn_active>▪ 중형</SizeBtn_active>
        ) : (
          <SizeBtn
            onClick={() => {
              setMaskSize("중형");
              setIsChange(true);
              if (sizeState != "중형") {
                setSizeState("중형");
              }
            }}
          >
            ▪ 중형
          </SizeBtn>
        )}
        {sizeState === "소형" ? (
          <SizeBtn_active>▪ 소형</SizeBtn_active>
        ) : (
          <SizeBtn
            onClick={() => {
              setMaskSize("소형");
              setIsChange(true);
              if (sizeState != "소형") {
                setSizeState("소형");
              }
            }}
          >
            ▪ 소형
          </SizeBtn>
        )}
        {sizeState === "기타" ? (
          <SizeBtn_active>▪ 기타</SizeBtn_active>
        ) : (
          <SizeBtn
            onClick={() => {
              setMaskSize("기타");
              setIsChange(true);
              if (sizeState != "기타") {
                setSizeState("기타");
              }
            }}
          >
            ▪ 기타
          </SizeBtn>
        )}
      </SizeListsSection>
    </div>
  );
}

export default FilterBox;
