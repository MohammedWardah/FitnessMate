import styles from "./Macros.module.css";

import OuterComp from "../UI/OuterComp";
import HorizontalBar from "../UI/HorizontalBar";

import { overView } from "../../userData";

const Macros = () => {
  return (
    <>
      <OuterComp title={"Daily Calories goal"}>
        <HorizontalBar
          label={"Goal"}
          fillColor={"#43A52A"}
          fillLevel={60}
          ind1={"1000"}
          ind2={"2000"}
          ind3={"3000"}
        />
      </OuterComp>
      <OuterComp title={"Nutrition"}>
        <main className={styles.overview}>
          <section className={styles.section}>
            <div className={styles.barCals}>
              <div className={styles.barFillCals} style={{ width: `${80}%` }}></div>
            </div>
            <div className={styles.stats}>
              <img src={""} alt="" />
              <span>
                {"Carbs"}: {`${200}g`}
              </span>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.barSteps}>
              <div className={styles.barFillSteps} style={{ width: `${40}%` }}></div>
            </div>
            <div className={styles.stats}>
              <img src={""} alt="" />
              <span>
                {"Fat"}: {`${95}g`}
              </span>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.barTime}>
              <div className={styles.barFillTime} style={{ width: `${85}%` }}></div>
            </div>
            <div className={styles.stats}>
              <img src={""} alt="" />
              <span>
                {"Protein"}: {`${240}g`}
              </span>
            </div>
          </section>
        </main>
      </OuterComp>
    </>
  );
};

export default Macros;
