import styles from "./Radio.module.css";

const Radio = ({ id, name, label, checked, onClick }) => {
  return (
    <div className={styles.radio}>
      <label htmlFor={id}>{label}</label>
      <input
        type="radio"
        name={name}
        value={id}
        id={id}
        defaultChecked={checked}
        onClick={onClick}
      />
    </div>
  );
};

export default Radio;
