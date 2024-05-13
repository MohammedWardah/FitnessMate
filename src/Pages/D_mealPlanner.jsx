import PageTemplate from "../Components/Layout/PageTemplate";
import MealPlanner from "../Components/Diet/MealPlanner";

import planner from "../assets/UI/planner.png";

const D_mealPlanner = () => {
  return (
    <PageTemplate back={true} subTitle={"Weekly meal planner"} subTitleImg={planner}>
      <MealPlanner />
    </PageTemplate>
  );
};

export default D_mealPlanner;
