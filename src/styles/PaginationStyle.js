import React from "react";
import styled from "styled-components";

export const PageUl = styled.ul`
  float: center;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  // color: white;
  padding: 1px;
  // border-top: 3px solid #186ead;
  // border-bottom: 3px solid #186ead;
  // background-color: rgba(0, 0, 0, 0.4);
`;

export const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 3px;
  border-radius: 100%;
  width: 25px;
  color: #05735f;
  &:hover {
    cursor: pointer;
    background: #e5ffe9;
  }
  &:focus::after {
    background: #e5ffe9;
  }
`;

export const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    // border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;
