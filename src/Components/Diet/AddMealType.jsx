import { useState } from "react";

import database from "../../assets/UI/database.png";
import recent from "../../assets/UI/recent.png";
import meal from "../../assets/UI/meal.png";
import loadingSeq from "../../assets/UI/loadingSeq.svg";

import styles from "./AddMealType.module.css";

const AddMealType = () => {
  const [content, setContent] = useState({
    loading: false,
    loadContent: false,
  });

  function loadContent() {
    setContent((prevState) => ({ ...prevState, loading: true, loadContent: false }));
    setTimeout(() => {
      setContent((prevState) => ({ ...prevState, loading: false, loadContent: true }));
    }, 3000);
  }
  return (
    <>
      <main className={styles.add}>
        <div className={styles.addComp} onClick={loadContent}>
          <div>
            <img src={recent} alt="" />
          </div>
          <span>Add from recent Meals</span>
        </div>
        <div className={styles.addComp} onClick={loadContent}>
          <div>
            <img src={database} alt="" />
          </div>
          <span>Add from Database</span>
        </div>
      </main>
      {content.loading && <img src={loadingSeq} className={styles.loading} />}
      {content.loadContent && (
        <section className={styles.meals}>
          <div>
            <img src={meal} alt="" />
            <span>Omelette</span>
          </div>
          <div>
            <img src={meal} alt="" />
            <span>Cereal</span>
          </div>
          <div>
            <img src={meal} alt="" />
            <span>Sandwich</span>
          </div>
          <div>
            <img src={meal} alt="" />
            <span>Pancake</span>
          </div>
        </section>
      )}
    </>
  );
};

export default AddMealType;
