import DietComp from "../UI/DietComp";

import breakfast from "../../assets/UI/breakfast.png";
import launch from "../../assets/UI/launch.png";
import dinner from "../../assets/UI/dinner.png";
import snacks from "../../assets/UI/snacks.png";
import macros from "../../assets/UI/macros.png";

const MealTracker = () => {
  return (
    <>
      {/* TODO: Pages to view added food or add new */}
      <DietComp img={breakfast} title={"Breakfast"} />
      <DietComp img={launch} title={"Launch"} />
      <DietComp img={dinner} title={"Dinner"} />
      <DietComp img={snacks} title={"Snacks"} />
      <DietComp img={macros} title={"Macros"} navigateTo={"macros"} />
    </>
  );
};

export default MealTracker;
