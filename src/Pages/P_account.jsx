import PageTemplate from "../Components/Layout/PageTemplate";
import AccountSettings from "../Components/Profile/AccountSettings";

import settings from "../assets/UI/settings.png";

const P_account = () => {
  return (
    <PageTemplate back={true} subTitle={"Account settings"} subTitleImg={settings}>
      <AccountSettings />
    </PageTemplate>
  );
};

export default P_account;
