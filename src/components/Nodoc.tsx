import styled from "styled-components";
type Props = {
  type: string;
};

const Nodoc = ({ type }: Props) => {
  const noDocImg = () => {
    if (type === "share") {
      return "noshare";
    } else if (type === "favorite") {
      return "no_favorite";
    }
    return "no_doc";
  };
  const noDocText = () => {
    if (type === "share") {
      return "공유 문서가 없습니다.";
    } else if (type === "favorite") {
      return "중요 문서가 없습니다.";
    }
    return "문서가 없습니다.";
  };
  return (
    <Wrapper className="no_doc sub">
      <img src={`${import.meta.env.VITE_APP_URL}/web/maxage1/common/img/${noDocImg()}.png`} alt="no_doc" />
      <dl>
        <dt>{noDocText()}</dt>
        <dd></dd>
      </dl>
    </Wrapper>
  );
};

export default Nodoc;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: calc(100vh - 255px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & dl {
    margin-top: 30px;
    font-size: 15px;
    color: #787878;
  }
`;
