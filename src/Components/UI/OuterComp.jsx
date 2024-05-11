import styles from "./OuterComp.module.css";

const OuterComp = ({ title, height, children }) => {
  return (
    <div className={styles.component} style={{ height: `${height}px` }}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default OuterComp;
