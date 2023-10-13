import SaleNow from "./SaleNow";
import UserInfo from "./UserInfo";
import CreditInfo from "./CreditInfo";

const UserInfoWrapper = () => {
  return (
    <dt>
      <SaleNow />
      <UserInfo email="frankie.j.kim@polarisoffice.com" userName="frankie.j.kim" />
      <CreditInfo credit={9624} />
    </dt>
  );
};

export default UserInfoWrapper;
