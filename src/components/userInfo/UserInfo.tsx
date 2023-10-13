import styled from "styled-components";
import profileImg from "../../assets/profile.svg";
type Props = {
  userName: string;
  email: string;
};

const UserInfo = ({ userName, email }: Props) => {
  return (
    <Wrapper>
      <img src={profileImg} alt="user_icon" />
      <div className="info">
        <span className="user_name">{userName}</span>
        <span className="user_email">{email}</span>
      </div>
    </Wrapper>
  );
};

export default UserInfo;

const Wrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 15px;
  min-height: 35px;
  width: 100%;
  & img {
    overflow: hidden;
    display: block;
    width: 35px;
    height: 35px;
    border-radius: 35px;
    margin-right: 0.9375rem;
  }
  & .info {
    overflow: auto;
    & span {
      display: block;
      overflow: hidden;
      padding-right: 24px;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 0.8125rem;
      text-align: start;
    }
    & .user_name {
      padding-bottom: 2px;
      color: #2f3133;
    }
    & .user_email {
      color: #919599;
      padding-bottom: 6px;
    }
  }

  &::after {
    position: absolute;
    top: calc(50% - 5px);
    right: 10px;
    border-top: 5px solid rgba(0, 0, 0, 0);
    border-bottom: 5px solid rgba(0, 0, 0, 0);
    border-left: 5px solid #666;
    content: "";
  }
`;
