import PageTemplate from "../Components/Layout/PageTemplate";
import DietComp from "../Components/UI/DietComp";

import dinner from "../assets/UI/dinner.png";
import meal from "../assets/UI/meal.png";

import styles from "../Components/Diet/AddMeal.module.css";

const D_addDinner = () => {
  return (
    <PageTemplate back={true} subTitle={"Add dinner"} subTitleImg={dinner}>
      <main className={styles.add}>
        <DietComp title={"Add previous meal"} img={meal} />
        <DietComp title={"Add from database"} img={meal} />
      </main>
    </PageTemplate>
  );
};

export default D_addDinner;
