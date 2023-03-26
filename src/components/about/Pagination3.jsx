// index 부분 설정

// index size : 5
// 이전버튼(prevBtn), 다음버튼(nextBtn)

import React from "react";

import { PageUl, PageLi, PageSpan } from "../../styles/PaginationStyle";

const Pagination3 = ({ page, size, setPage, allReviews, reviewCount }) => {
  // console.log(page);

  // 한번에 나오는 pageList
  const pageListOnce = [];
  for (let i = page - 5; i <= page + 4; i++) {
    if (i > 0 && i <= parseInt(reviewCount / size) + 1) {
      pageListOnce.push(i);
    }
  }

  // console.log("총 페이지 수: ", parseInt(reviewCount / size) + 1);
  // console.log("pageList: ", pageList);
  // console.log("pageListOnce: ", pageListOnce);
  // console.log("pageListOnce", pageListOnce);

  return (
    <div>
      <nav>
        <PageUl>
          {page - 1 ? (
            // 이전버튼
            <PageLi
              onClick={() => {
                setPage(page - 1);
              }}
            >
              ◀
            </PageLi>
          ) : (
            <></>
          )}
          {pageListOnce ? (
            // 페이지번호 표시
            pageListOnce.map((page) => (
              <PageLi
                key={page}
                onClick={() => {
                  setPage(page);
                }}
              >
                <PageSpan>{page}</PageSpan>
              </PageLi>
            ))
          ) : (
            <></>
          )}
          {page + 1 < parseInt(reviewCount / size) + 1 ? (
            page + 1 ? (
              // 다음버튼
              <PageLi onClick={() => setPage(page + 1)}>▶</PageLi>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </PageUl>
      </nav>
    </div>
  );
};

export default Pagination3;
