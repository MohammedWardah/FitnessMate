import PageTemplate from "../Components/Layout/PageTemplate";
import WaterIntake from "../Components/Diet/WaterIntake";

import bottle from "../assets/UI/bottle.png";

const D_waterIntake = () => {
  return (
    <PageTemplate back={true} subTitle={"Daily water intake"} subTitleImg={bottle}>
      <WaterIntake />
    </PageTemplate>
  );
};

export default D_waterIntake;
