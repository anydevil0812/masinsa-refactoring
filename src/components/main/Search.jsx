// 검색기능
import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import SearchMaskLists from "./SearchMaskLists";
import SortChange from "./SortChange";
import {
  SearchArticle,
  SearchBoxSection,
  SearchCenter,
  SearchLeftBlank,
  SortSection,
  SearchMaskListSection,
} from "../../styles/MainPageStyle";
import { getMainMask } from "../../api/mask/getMainMask";
import { getSearchMaskSort } from "../../api/mask/getSearchMaskSort";

// 메인페이지 마스크리스트 조회
function Search() {
  // 키워드 설정
  const [keyword, setKeyWord] = useState("");
  // console.log("keyword : ", keyword);

  // 정렬변경을 위한 상수선언
  const [sortCol, setSortCol] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // console.log(sortCol, " : ", sortOrder);

  // 마스크 리스트
  const [maskList, setMaskList] = useState([]);

  // 처음 페이지 렌더링 시 마스크 요청 : filterMaskSort 이용 ( getMainMask 로 하나 더 만듦)
  useEffect(() => {
    getMainMask({ sortCol, sortOrder, setMaskList, keyword });
    // console.log(maskList);
  }, [sortCol, sortOrder, keyword]);

  // 검색 시 마스크 요청
  useEffect(() => {
    getSearchMaskSort({ keyword, sortCol, sortOrder, setMaskList });
  }, [sortCol, sortOrder, keyword]);

  // console.log("user-search", user);

  return (
    <div>
      <hr></hr>
      <SearchArticle>ALL MASINSA MASK</SearchArticle>
      <hr></hr>
      {/* 검색창 */}
      <SearchBoxSection>
        {/* 왼쪽빈칸 */}
        <SearchLeftBlank></SearchLeftBlank>
        {/* 검색창부분 */}
        <SearchCenter>
          <SearchBox keyword={keyword} setKeyWord={setKeyWord} />
        </SearchCenter>
        {/* 정렬변경 */}
        <SortSection>
          <SortChange setSortCol={setSortCol} setSortOrder={setSortOrder} />
        </SortSection>
      </SearchBoxSection>
      {/* 마스크리스트 부분*/}
      <SearchMaskListSection>
        {/* 마스크리스트 */}
        <SearchMaskLists maskList={maskList} keyword={keyword} />
      </SearchMaskListSection>
    </div>
  );
}

export default Search;
