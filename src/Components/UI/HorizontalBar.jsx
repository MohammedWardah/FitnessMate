import styles from "./HorizontalBar.module.css";

function HorizontalBar({ label, fillLevel, fillColor, ind1, ind2, ind3 }) {
  return (
    <div className={styles.bar}>
      <span>{label}</span>
      <div className={styles.barContainer}>
        <div
          className={fillLevel === 100 ? styles.barFilled : styles.barFill}
          style={{ width: `${fillLevel}%`, backgroundColor: fillColor }}></div>
        <div className={styles.indicator}>
          <span>{ind1}</span>
          <span>{ind2}</span>
          <span>{ind3}</span>
        </div>
      </div>
    </div>
  );
}

export default HorizontalBar;
