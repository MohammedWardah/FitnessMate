import PageTemplate from "../Components/Layout/PageTemplate";
import DietComp from "../Components/UI/DietComp";

import breakfast from "../assets/UI/breakfast.png";
import meal from "../assets/UI/meal.png";

import styles from "../Components/Diet/AddMeal.module.css";

const D_addBreakfast = () => {
  return (
    <PageTemplate back={true} subTitle={"Add breakfast"} subTitleImg={breakfast}>
      <main className={styles.add}>
        <DietComp title={"Add previous meal"} img={meal} />
        <DietComp title={"Add from database"} img={meal} />
      </main>
    </PageTemplate>
  );
};

export default D_addBreakfast;
