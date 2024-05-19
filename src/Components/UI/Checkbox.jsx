import styles from "./Checkbox.module.css";

const Checkbox = ({ id, label, checked }) => {
  return (
    <div className={styles.check}>
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" id={id} name={id} defaultChecked={checked} />
    </div>
  );
};

export default Checkbox;
