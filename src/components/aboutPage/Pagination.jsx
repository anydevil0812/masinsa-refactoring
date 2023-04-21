// index 부분 설정

// index size : 5
// 이전버튼(prevBtn), 다음버튼(nextBtn)

import React from "react";
import styled from "styled-components";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

export default function Pagination({
  currentPage,
  setCurrentPage,
  reviewCount,
}) {
  // 한번에 나오는 pageList
  const pageListOnce = [];
  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    if (i > 0 && i <= parseInt(reviewCount / 10) + 1) {
      pageListOnce.push(i);
    }
  }

  // console.log("총 페이지 수: ", parseInt(reviewCount / 10) + 1);
  // console.log(currentPage);
  // console.log("pageListOnce: ", pageListOnce.length);

  return (
    <PageOl>
      {currentPage - 1 ? (
        // 이전버튼
        <Icon
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          <FaRegArrowAltCircleLeft />
        </Icon>
      ) : (
        <></>
      )}
      {pageListOnce &&
        // 페이지번호 표시
        pageListOnce.map((page) => (
          <PageLi
            key={page}
            id={page}
            current={page === currentPage}
            onClick={() => {
              setCurrentPage(page);
            }}
          >
            {page}
          </PageLi>
        ))}
      {currentPage + 1 < parseInt(reviewCount / 10) + 1 && currentPage + 1 && (
        // 다음버튼
        <Icon onClick={() => setCurrentPage(currentPage + 1)}>
          <FaRegArrowAltCircleRight />
        </Icon>
      )}
    </PageOl>
  );
}

const PageOl = styled.ul`
  margin-top: 10px;
  ${(props) => props.theme.variables.flex("", "center", "center")};
`;

const PageLi = styled.li`
  width: 35px;
  height: 35px;
  display: inline-block;
  margin: 0 3px;
  background: ${(props) =>
    props.current ? props.theme.style.masinsaColor : "none"};
  color: ${(props) =>
    props.current ? props.theme.style.white : props.theme.style.masinsaColor};
  font-size: ${(props) => props.theme.style.textMedium};
  font-weight: 600;
  text-align: center;
  line-height: 35px;
  border-radius: 100%;
  cursor: pointer;
  &:hover,
  &:active {
    color: ${(props) => props.theme.style.white};
    background: ${(props) => props.theme.style.masinsaColor};
  }
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    margin: 0 2px;
    font-size: ${(props) => props.theme.style.textXSmall};
    line-height: 25px;
  }
`;

const Icon = styled.span`
  font-size: 24px;
  background: transparent;
  padding-top: 3px;
  margin: 0 5px;
  color: ${(props) => props.theme.style.masinsaColor};
  cursor: pointer;
  &:hover,
  &:active {
    color: ${(props) => props.theme.style.text};
  }
`;
