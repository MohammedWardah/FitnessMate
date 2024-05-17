import PageTemplate from "../Components/Layout/PageTemplate";
import UserInformation from "../Components/Profile/UserInformation";

import idCard from "../assets/UI/idcard.png";

const P_userInformation = () => {
  return (
    <PageTemplate back={true} subTitle={"User information"} subTitleImg={idCard}>
      <UserInformation />
    </PageTemplate>
  );
};

export default P_userInformation;
