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
      <DietComp img={breakfast} title={"Breakfast"} navigateTo={"add-breakfast"} />
      <DietComp img={launch} title={"Launch"} navigateTo={"add-launch"} />
      <DietComp img={dinner} title={"Dinner"} navigateTo={"add-dinner"} />
      <DietComp img={snacks} title={"Snacks"} navigateTo={"add-snacks"} />
      <DietComp img={macros} title={"Macros"} navigateTo={"macros"} />
    </>
  );
};

export default MealTracker;
