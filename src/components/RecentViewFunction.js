import React, { useEffect, useState } from "react";
import { withTheme } from "styled-components";

/* 최근 본 상품 */

export function RecentViewFunction({ mask }) {
  // 최근 본 상품 : localStorage에 저장하면 영구적 ( 사용자 기억 )

  useEffect(() => {
    // 우선적으로, localStorage에 있는 데이터(최근본상품) 가져오기
    let watchArr = localStorage.getItem("watchedMask");

    // 저장된 데이터가 없으면 새로운 배열 형성
    if (watchArr == null) {
      watchArr = [];
    } else {
      // 만약, 저장된 데이터가 있으면 JSON -> object로 변경하여 저장
      watchArr = JSON.parse(watchArr);
    }

    // console.log(mask);

    // concat은 Arr에만 가능 !
    // console.log(Array.isArray(watchArr));

    // 중복 값 제거 ( 같은 상품은 한개니까 ..)

    // 만약 watchArr 에 아무것도 없다면 mask 객체 최초로 바로 저장
    if (watchArr.length == 0) {
      // 현재 aboutPage의 mask 객체를 watchArr배열에 저장
      watchArr = watchArr.concat(mask);
    } else {
      // watchArr에 1개라도 객체 값이 존재한다면? > 중복된 값인지 검사

      // 같은 makId를 가진 값이 있는 지 확인을 위한 count
      let count = 0;

      // watchArr 길이만큼 반복하면서 같은 maskId가 있으면 count ++
      for (let i = 0; i < watchArr.length; i++) {
        // console.log("watchArr[i]", watchArr[i].id);
        // console.log("mask.id", mask.id);
        // console.log("mask.id", watchArr[i].id != mask.id);
        if (watchArr[i].id == mask.id) {
          count += 1;
        }
      }

      // 반복 검사 후, count = 0 이면 중복데이터(객체)가 없다는 뜻이므로 watchArr에 저장
      if (count == 0) {
        // console.log(count);
        watchArr = watchArr.concat(mask);
      }
    }

    // 만약 최근 본 상품이 3개가 넘어가면 shift를 통해 앞에 값 삭제
    if (watchArr.length > 3) {
      watchArr.shift();
    }

    // 가장 최근의 상품의 제일 위로
    watchArr = watchArr.reverse();

    // console.log("mask", mask);
    // console.log("watchArr", watchArr);

    // localStorage에 watchArr(최근본상품) 데이터를 JSON 자료형으로 저장
    localStorage.setItem("watchedMask", JSON.stringify(watchArr));
  }, [mask]);
}
