import { useState, useEffect, memo } from "react";
import styled from "@emotion/styled";
import Next from "../../assets/Next";
import Prev from "../../assets/Prev";

interface PagenationType {
  totalPage: number;
  limit: number;
  page: number;
  setPage: (page: number) => void;
}

const sliceArrayByLimit = (totalPage: number, limit: number) => {
  const totalPageArray = Array(totalPage)
    .fill(undefined)
    .map((_, i) => i);
  return Array(Math.ceil(totalPage / limit))
    .fill(undefined)
    .map(() => totalPageArray.splice(0, limit));
};

const Pagenation = ({ totalPage, limit, page, setPage }: PagenationType) => {
  const [currentPageArray, setCurrentPageArray] = useState<number[]>([]);
  const [totalPageArray, setTotalPageArray] = useState<number[][]>([[]]);

  useEffect(() => {
    if (page % limit === 1) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page, limit, totalPageArray]);

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPage === 0 ? 1 : totalPage, limit);
    setTotalPageArray(slicedPageArray);
    setCurrentPageArray(slicedPageArray[0]);
  }, [totalPage, limit]);

  const onPrev = () => {
    if (currentPageArray[0] === 1) return;
    setPage(currentPageArray[0] - 5);
  };
  const onNext = () => {
    if (currentPageArray.includes(totalPage === 0 ? 1 : totalPage)) return;
    setPage(currentPageArray[0] + 5);
  };
  return (
    <Wrapp>
      <button onClick={onPrev} disabled={currentPageArray[0] === 0}>
        <Prev color={currentPageArray[0] === 0 ? "#D8D8D8" : "#a0a0a0"} />
      </button>

      <ul className="pagenation">
        {currentPageArray?.map((i) => (
          <li key={i + 1} className={page === i + 1 ? "on" : ""} onClick={() => setPage(i + 1)}>
            {i + 1}
          </li>
        ))}
      </ul>

      <button onClick={onNext} disabled={currentPageArray.includes(totalPage)}>
        <Next color={currentPageArray.includes(totalPage) ? "#D8D8D8" : "#a0a0a0"} />
      </button>
    </Wrapp>
  );
};

export default memo(Pagenation);

const Wrapp = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #454c53;
  gap: 0 24px;
  padding: 10px;
  & .pagenation {
    width: inherit;
    list-style: none;
    display: flex;
    gap: 0 24px;
    border: none;
    font-size: 14px;
    width: auto;
    height: auto;
    & li {
      display: block;
      position: static;
    }

    & .on {
      font-weight: 700;
    }
  }
`;
