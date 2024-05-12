// import styles from "./Diet.module.css";

import meal from "../../assets/UI/meal.png";
import bottle from "../../assets/UI/bottle.png";
import planner from "../../assets/UI/planner.png";
import DietComp from "../UI/DietComp";

const Diet = () => {
  return (
    <>
      <DietComp title={"Daily meal tracker"} img={meal} />
      <DietComp title={"Daily water intake "} img={bottle} />
      <DietComp title={"Weekly meal planner"} img={planner} />
    </>
  );
};

export default Diet;
