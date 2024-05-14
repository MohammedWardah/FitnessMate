import DietComp from "../UI/DietComp";

import breakfast from "../../assets/UI/breakfast.png";
import launch from "../../assets/UI/launch.png";
import dinner from "../../assets/UI/dinner.png";
import snacks from "../../assets/UI/snacks.png";

const AddMeal = () => {
  return (
    <>
      <main>
        <DietComp title={"Add breakfast"} img={breakfast} navigateTo={"add-breakfast"} />
        <DietComp title={"Add launch"} img={launch} navigateTo={"add-launch"} />
        <DietComp title={"Add dinner"} img={dinner} navigateTo={"add-dinner"} />
        <DietComp title={"Add snacks"} img={snacks} navigateTo={"add-snacks"} />
      </main>
    </>
  );
};

export default AddMeal;
