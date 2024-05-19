import OuterComp from "../UI/OuterComp";
import HorizontalBar from "../UI/HorizontalBar";

import cals from "../../assets/UI/cals.svg";
import steps from "../../assets/UI/steps.svg";
import time from "../../assets/UI/time.svg";

import styles from "./Goals.module.css";

import { overView } from "../../userData";

const Goals = () => {
  return (
    <>
      <OuterComp title={"Weekly Goal Summary"}>
        <main className={styles.overview}>
          <section className={styles.section}>
            <div className={styles.barCals}>
              <div
                className={styles.barFillCals}
                style={{ width: `${overView.calsWeeklyFill}%` }}></div>
            </div>
            <div className={styles.stats}>
              <img src={cals} alt="" />
              <span>
                {overView.calsWeekly} / {`${overView.setWeeklyCals}Kcal`}
              </span>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.barSteps}>
              <div
                className={styles.barFillSteps}
                style={{ width: `${overView.stepsWeeklyFill}%` }}></div>
            </div>
            <div className={styles.stats}>
              <img src={steps} alt="" />
              <span>
                {overView.stepsWeekly} / {`${overView.setWeeklySteps}step`}
              </span>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.barTime}>
              <div
                className={styles.barFillTime}
                style={{ width: `${overView.timeWeeklyFill}%` }}></div>
            </div>
            <div className={styles.stats}>
              <img src={time} alt="" />
              <span>
                {overView.timeWeekly} / {`${overView.setWeeklyTime}min`}
              </span>
            </div>
          </section>
        </main>
      </OuterComp>
      <OuterComp title={"Weekly water intake"}>
        <HorizontalBar
          label={"Stats"}
          fillLevel={75}
          fillColor={"#007fff"}
          ind1={`${0}L`}
          ind2={`${12}L`}
          ind3={`${24}L`}
        />
      </OuterComp>
      <OuterComp title={"Weekly calories intake"}>
        <HorizontalBar
          label={"Stats"}
          fillLevel={65}
          fillColor={"#43A52A"}
          ind1={`${0}cal`}
          ind2={`${10500}cal`}
          ind3={`${21000}cal`}
        />
      </OuterComp>
    </>
  );
};

export default Goals;
