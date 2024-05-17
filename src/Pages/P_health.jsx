import PageTemplate from "../Components/Layout/PageTemplate";
import Health from "../Components/Profile/Health";

import health from "../assets/UI/health.png";

const P_Health = () => {
  return (
    <PageTemplate back={true} subTitle={"Health"} subTitleImg={health}>
      <Health />
    </PageTemplate>
  );
};

export default P_Health;
