import React, { useEffect, useState } from "react";
import TopThree from "../components/main/TopThree";
import Search from "../components/main/Search";
import { getTop3 } from "../api/mask/getTop3";
import { Wrapper } from "../styles/Common";

function Main() {
  const [topMask, setTopMask] = useState([]);

  useEffect(() => {
    getTop3({ setTopMask });
  }, []);

  return (
    <Wrapper>
      {/* TOP3 */}
      {topMask && <TopThree topMask={topMask} />}
      {/* 키워드검색결과 MakList 띄워주는 부분 */}
      <Search />
    </Wrapper>
  );
}

export default Main;
