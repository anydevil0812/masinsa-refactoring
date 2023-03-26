import React, { useEffect, useState } from "react";
import TopThree from "../components/main/TopThree";
import Search from "../components/main/Search";
import { MainWrapper } from "../styles/OtherStyles";
import { Top3Section, SearchSection } from "../styles/MainPageStyle";
import { getTop3 } from "../api/mask/getTop3";

function Main() {
  const [topMask, setTopMask] = useState([]);

  useEffect(() => {
    getTop3({ setTopMask });
  }, []);

  return (
    <div>
      <MainWrapper>
        {/* TOP3 */}
        {/* <Top3Section> */}
        {topMask && (
          // 만약 Best 값이 존재한다면 보여주기 !
          <Top3Section>
            <TopThree topMask={topMask} />
          </Top3Section>
        )}
        {/* 키워드검색결과 MakList 띄워주는 부분 */}
        <SearchSection>
          <Search />
        </SearchSection>
      </MainWrapper>
    </div>
  );
}

export default Main;
