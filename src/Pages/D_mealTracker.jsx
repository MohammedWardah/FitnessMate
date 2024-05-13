import PageTemplate from "../Components/Layout/PageTemplate";
import MealTracker from "../Components/Diet/MealTracker";

import meal from "../assets/UI/meal.png";

const D_mealTracker = () => {
  return (
    <PageTemplate back={true} subTitle={"Meal tracker"} subTitleImg={meal}>
      <MealTracker />
    </PageTemplate>
  );
};

export default D_mealTracker;
