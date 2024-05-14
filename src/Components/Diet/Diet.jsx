import meal from "../../assets/UI/meal.png";
import bottle from "../../assets/UI/bottle.png";
import planner from "../../assets/UI/planner.png";
import DietComp from "../UI/DietComp";

const Diet = () => {
  return (
    <>
      <DietComp title={"Daily meal tracker"} img={meal} navigateTo={"meal-tracker"} />
      <DietComp title={"Daily water intake "} img={bottle} navigateTo={"water-intake"} />
      <DietComp title={"Weekly meal planner"} img={planner} navigateTo={"meal-planner"} />
    </>
  );
};

export default Diet;
