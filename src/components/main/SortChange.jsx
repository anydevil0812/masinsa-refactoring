//정렬기준변경
import React from "react";
import styled from "styled-components";

// 정렬기준 변경 select
const SortSelect = styled.select`
  width: 80px;
  float: right;
`;

function SortChange({ setSortCol, setSortOrder }) {
  // sortCol, sortOrder 설정
  const sortValueChagne = (e) => {
    // console.log("value", e.target.value)

    if (e.target.value === "price") {
      setSortCol("price");
      setSortOrder("asc");
    } else if (e.target.value === "avg_score") {
      setSortCol("avg_score");
      setSortOrder("desc");
    } else if (e.target.value === "click_num") {
      setSortCol("click_num");
      setSortOrder("desc");
    } else {
      setSortCol("");
      setSortOrder("");
    }
  };

  return (
    <div>
      <div>
        <SortSelect id="sortChange" onChange={sortValueChagne}>
          <option value="">정렬기준</option>
          <option value="price">낮은가격순</option>
          <option value="avg_score">평점순</option>
          <option value="click_num">클릭순</option>
        </SortSelect>
      </div>
    </div>
  );
}

export default SortChange;
