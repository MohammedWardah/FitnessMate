import styles from "./OuterComp.module.css";

const OuterComp = ({ title, icon, height, children }) => {
  return (
    <div className={styles.component} style={{ height: `${height}px` }}>
      <div className={styles.header}>
        <h1>{title}</h1>
        {icon && <img src={icon} alt="" />}
      </div>
      {children}
    </div>
  );
};

export default OuterComp;
