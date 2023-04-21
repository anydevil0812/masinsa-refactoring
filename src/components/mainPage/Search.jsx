import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { getSearchMask } from "../../api/mask";

function Search({ setMaskList, setKeyWord, keyword }) {
  const [params, setParams] = useState({
    keyword: "",
  });

  const [inputValue, setInputValue] = useState();

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onAdd = () => {
    document.getElementById("sortChange").options.selectedIndex = 0;
    setKeyWord(inputValue);
  };

  // 엔터키 눌렸을 때도 keyword에 값 전달 => 새로고침 안되게 하기
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      document.getElementById("sortChange").options.selectedIndex = 0;
      setKeyWord(inputValue);
      e.preventDefault();
      setParams({
        keyword: inputValue,
      });
    }
  };

  const sortValueChagne = (e) => {
    console.log(e.target.value);
    if (e.target.value === "price") {
      setParams({
        keyword: keyword,
        sortCol: "price",
        order: "asc",
      });
    } else if (e.target.value === "avg_score") {
      setParams({
        keyword: keyword,
        sortCol: "avg_score",
        order: "desc",
      });
    } else if (e.target.value === "click_num") {
      setParams({
        keyword: keyword,
        sortCol: "click_num",
        order: "desc",
      });
    } else {
      setParams({
        keyword: keyword,
      });
    }
  };

  useEffect(() => {
    getSearchMask({ params, setMaskList });
  }, [params, setMaskList]);

  return (
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
  @media (max-width: 768px) {
    display: none;
  }
`;
