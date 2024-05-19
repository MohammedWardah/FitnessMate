import PageTemplate from "../Components/Layout/PageTemplate";
import Goals from "../Components/Profile/Goals";

import goal from "../assets/UI/goals.png";

const P_goals = () => {
  return (
    <PageTemplate back={true} subTitle={"Weekly goals"} subTitleImg={goal}>
      <Goals />
    </PageTemplate>
  );
};

export default P_goals;
