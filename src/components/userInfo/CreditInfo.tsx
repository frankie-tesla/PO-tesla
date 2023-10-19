import styled from "@emotion/styled";
import { numberset } from "../../utils/nemberset";

type Props = {
  credit: number;
};
const CreditInfo = ({ credit }: Props) => {
  return (
    <Wrapper>
      <div className="point">
        <dl>
          <dt>Credit</dt>
          <dd>
            <span>{numberset(credit)}</span>
            <img src={`${import.meta.env.VITE_APP_STATIC}/icon/ico-credit.svg`} alt="credit-icon" />
          </dd>
        </dl>
      </div>
    </Wrapper>
  );
};

export default CreditInfo;

const Wrapper = styled.div`
  padding: 5px 13px 12px 13px;
  font-family: "Malgun Gothic", sans-serif;
  & .point {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background-color: #f2f4f6;

    & dl {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 30px;
      padding: 0 8px 0 10px;
      cursor: pointer;

      & dt {
        font-weight: 600;
        font-size: 12px;
        color: #454c53;
      }

      & dd {
        overflow: auto;
        display: flex;
        align-items: center;
        & span {
          overflow: hidden;
          display: inline-flex;
          height: 20px;
          align-items: center;
          padding-right: 0.25rem;
          font-size: 12px !important;
          font-weight: 600;
          white-space: nowrap;
          color: #454c53;
        }
      }
    }
  }
`;
