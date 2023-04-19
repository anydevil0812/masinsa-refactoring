import styled from "styled-components";
import React, { useEffect, useState } from "react";
import MaskInfo from "../components/about/MaskInfo";
import Analysis from "../components/about/Analysis";
import MaskDetail from "../components/about/MaskDetail";
import Reviews from "../components/about/Reviews";
import CurrentLocation from "../components/CurrentLocation";
import { useParams } from "react-router-dom";
import { getMask } from "../api/mask/getMask";
import { getImage } from "../api/getImage";
import { RecentViewFunction } from "../components/recentView/RecentViewFunction";
import { getAnalysis } from "../api/analysis/getAnalysis";
import { Wrapper } from "../styles/Common";
import GoReviewBtn from "../components/about/GoReviewBtn";

function About() {
  // 로그인시, 로컬에 저장되는 userInfo 가져와서 user
  const user = JSON.parse(localStorage.getItem("userInfo"));

  // 파라미터를 통한 maskId 전달
  const { maskId } = useParams();
  // console.log("useParams", maskId);

  //  마스크요청
  const [mask, setMask] = useState([]);

  useEffect(() => {
    getMask({ maskId, setMask });
  }, [maskId]);

  //  마스크이미지 요청
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImage({ maskId, setImages });
  }, [maskId]);

  // console.log("AboutPage - Image 불러오기 : ", images);

  // 마스크 분석정보 요청
  const [analysisinfo, setAnalysisInfo] = useState(null);

  useEffect(() => {
    getAnalysis({ maskId, setAnalysisInfo });
  }, [maskId]);

  // console.log(analysisinfo);

  // 멤버 요청
  // 멤버정보 가져오기
  // const [memberId, setMemberId] = useState(2);
  // const [member, setMember] = useState([]);

  // useEffect(() => {
  //   getMember({ memberId, setMember });
  // }, []);

  // console.log("memberId: ", memberId);
  // console.log("member: ", member);

  return (
    <>
      {mask && (
        <Wrapper>
          {/* 현재 필터 위치 */}
          <CurrentLocation mask={mask} />
          {/* 마스크 정보 */}
          <MaskInfo maskId={maskId} mask={mask} />
          {/* 분석정보 */}
          {analysisinfo ? (
            <Analysis analysisinfo={analysisinfo} />
          ) : (
            <Line>
              {/* 리뷰보러가기 버튼 */}
              <GoReviewBtn />
            </Line>
          )}
          {/* 상세정보 */}
          <MaskDetail images={images} />
          {/* 리뷰창 */}
          {/* user 있으면 있는 Reviews, 없으면 없는 Reviews */}
          {user == null ? (
            <Reviews mask={mask} maskId={maskId} />
          ) : (
            <Reviews mask={mask} maskId={maskId} memberId={user.id} />
          )}
          {/* 최근 본 상품 관련 메서드 실행 */}
          <RecentViewFunction mask={mask} />
        </Wrapper>
      )}
    </>
  );
}

export default About;

const Line = styled.div`
  width: 100%;
  text-align: center;
  border-top: 1px solid ${(props) => props.theme.style.textLightGray};
  border-bottom: 1px solid ${(props) => props.theme.style.textLightGray};
  margin-top: 20px;
`;
