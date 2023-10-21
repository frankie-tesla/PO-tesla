import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import searchImg from "../assets/search.svg";
import { useSearchStateContext } from "../context/SearchStateContext";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [first, setfirst] = useState("");
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();
  const {
    state,
    actions: { setState }
  } = useSearchStateContext();
  useEffect(() => {
    if (isClick) {
      setState({ ...state, keyword: first, isClick });
      setIsClick(!isClick);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClick]);
  return (
    <SearchWrapper>
      <legend>검색</legend>
      <p className="search">
        <label htmlFor="search" className={first !== "" ? "none" : ""}>
          Polaris Drive 검색
        </label>
        <input
          value={first}
          onChange={(e) => setfirst(e.target.value)}
          type="text"
          id="search"
          className="placeholder"
          onFocus={() => navigate("/search")}
        />

        <button className="doc" onClick={() => setIsClick(true)}>
          <img src={searchImg} alt="search_btn" />
        </button>
      </p>
    </SearchWrapper>
  );
};

export default SearchBar;

const SearchWrapper = styled.fieldset`
  flex: 1;
  clear: both;
  margin: 0;
  padding: 0;
  min-width: 160px;
  max-width: 732px;
  border: none;
  padding-right: 30px;
  & legend {
    overflow: hidden;
    visibility: hidden;
    width: 0;
    height: 0;
    font-size: 0;
    display: none;
  }
  & p {
    position: relative;
    padding-right: 40px;
    height: 36px;
    border: 3px solid #1d7ff9;
    border-radius: 3px;
    background: #fff;
    margin: 0;

    & label {
      position: absolute;
      top: 0;
      left: 19px;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      color: #a0a0a0;
    }

    & input {
      width: 100%;
      padding: 0;
      height: 31px;
      line-height: 30px;
      text-indent: 16px;
      border: none;
      font-size: 14px;
      appearance: none;
      outline: 0;
    }

    & button {
      border: 0;
      background-color: transparent;
      position: absolute;
      top: 0;
      right: 0;
      width: 39px;
      height: 32px;
      cursor: pointer;
    }

    & .none {
      display: none;
    }
  }
`;
