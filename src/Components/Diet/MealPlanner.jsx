import styles from "./MealPlanner.module.css";

import DietComp from "../UI/DietComp";

import meal from "../../assets/UI/meal.png";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const MealPlanner = () => {
  return (
    <>
      <main className={styles.mealPlanner}>
        {days.map((dayName) => (
          <DietComp key={dayName} img={meal} title={dayName} navigateTo={`${dayName}`} />
        ))}
      </main>
    </>
  );
};

export default MealPlanner;
