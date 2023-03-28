import React, { useState, useEffect } from "react";
import SearchMaskLists from "./SearchMaskLists";
import { getMainMask } from "../../api/mask/getMainMask";
import { getSearchMaskSort } from "../../api/mask/getSearchMaskSort";
import styled from "styled-components";
import { Title } from "../../styles/Common";
import { FaSearch } from "react-icons/fa";

function Search() {
  // 키워드 설정
  const [keyword, setKeyWord] = useState("");

  // 정렬변경을 위한 상수선언
  const [sortCol, setSortCol] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // 마스크 리스트
  const [maskList, setMaskList] = useState([]);

  const [inputValue, setInputValue] = useState();

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onAdd = () => {
    setKeyWord(inputValue);
  };

  // 엔터키 눌렸을 때도 keyword에 값 전달 => 새로고침 안되게 하기
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setKeyWord(inputValue);
      e.preventDefault();
    }
  };

  const sortValueChagne = (e) => {
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

  // 처음 페이지 렌더링 시 마스크 요청 : filterMaskSort 이용 ( getMainMask 로 하나 더 만듦)
  useEffect(() => {
    getMainMask({ sortCol, sortOrder, setMaskList, keyword });
    // console.log(maskList);
  }, [sortCol, sortOrder, keyword]);

  // 검색 시 마스크 요청
  useEffect(() => {
    getSearchMaskSort({ keyword, sortCol, sortOrder, setMaskList });
  }, [sortCol, sortOrder, keyword]);

  return (
    <>
      <Title>ALL MASINSA MASK</Title>
      {/* 검색창 */}
      <Form>
        <Input
          type="search"
          id="SearchBox"
          placeholder="ex.중형, 마스크, KF94"
          autoFocus
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <Icon onClick={onAdd}>
          <FaSearch />
        </Icon>
        {/* 정렬변경 */}
        <SelectBox id="sortChange" onChange={sortValueChagne}>
          <option value="">정렬기준</option>
          <option value="price">낮은가격순</option>
          <option value="avg_score">평점순</option>
          <option value="click_num">클릭순</option>
        </SelectBox>
      </Form>
      {/* 마스크리스트 부분*/}
      {/* <SearchMaskLists maskList={maskList} keyword={keyword} /> */}
    </>
  );
}

export default Search;

export const Form = styled.form`
  width: 60%;
  height: 40px;
  margin: 20px auto;
  padding: 0 10px;
  border: 2px solid ${(props) => props.theme.style.bg};
  position: relative;
  transition: 0.5s ease;
  @media (max-width: 768px) {
    height: 30px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: 0;
  transition: 0.5s ease;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 25%;
  right: 10px;
  font-size: ${(props) => props.theme.style.textMedium};
  color: ${(props) => props.theme.style.bg};
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textSmall};
  }
`;

export const SelectBox = styled.select`
  border: 1px solid ${(props) => props.theme.style.bg};
  position: absolute;
  top: 25%;
  right: -100px;
  opacity: 1;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    opacity: 0;
  }
`;
