import { useNavigate } from "react-router-dom";

import styles from "./PageTemplate.module.css";

import back_arrow from "../../assets/UI/back.png";

const PageTemplate = ({ title, back, subTitle, subTitleImg, children }) => {
  const navigate = useNavigate();
  function handleBack() {
    navigate("..");
  }

  return (
    <main className={styles.container}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {back && <img src={back_arrow} onClick={handleBack} className={styles.backArrow} />}
      {subTitle && (
        <div className={styles.subTitle}>
          <img src={subTitleImg} alt="" />
          <h2>{subTitle}</h2>
        </div>
      )}
      {children}
      <div className={styles.bottomFiller}></div>
    </main>
  );
};

export default PageTemplate;
