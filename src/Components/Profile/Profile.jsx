import DietComp from "../UI/DietComp";

import user from "../../assets/UI/idcard.png";
import goals from "../../assets/UI/goals.png";
import health from "../../assets/UI/health.png";
import prefrences from "../../assets/UI/prefrences.png";
import settings from "../../assets/UI/settings.png";
import history from "../../assets/UI/history.png";

const Profile = () => {
  return (
    <>
      <DietComp title={"User information"} img={user} navigateTo={"user-information"} />
      <DietComp title={"Goals"} img={goals} navigateTo={"weekly-goals"} />
      <DietComp title={"Health"} img={health} navigateTo={"health"} />
      <DietComp title={"Prefrences"} img={prefrences} navigateTo={"prefrences"} />
      <DietComp title={"Account settings"} img={settings} navigateTo={"account"} />
      <DietComp title={"History"} img={history} navigateTo={"history"} />
    </>
  );
};

export default Profile;
