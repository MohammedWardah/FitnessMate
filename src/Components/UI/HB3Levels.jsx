import styles from "./HB3Levels.module.css";

function HB3Levels({ label, fillLevel, ind1, ind2 }) {
  let fillClass;
  if (fillLevel <= 33) {
    fillClass = styles.lowFill;
  } else if (fillLevel > 33 && fillLevel <= 66) {
    fillClass = styles.mediumFill;
  } else {
    fillClass = styles.highFill;
  }

  return (
    <div className={styles.bar}>
      <span>{label}</span>
      <div className={styles.barContainer}>
        <div className={`${styles.barFill} ${fillClass}`} style={{ width: `${fillLevel}%` }}></div>
        <div className={styles.indicator}>
          <span>{ind1}</span>
          <span>{ind2}</span>
        </div>
      </div>
    </div>
  );
}

export default HB3Levels;
