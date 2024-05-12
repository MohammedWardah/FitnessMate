import { useNavigate } from "react-router-dom";

import styles from "./DietComp.module.css";

const DietComp = ({ img, title, navigateTo }) => {
  const navigate = useNavigate();
  const navigateToPath = () => {
    navigate(navigateTo);
  };

  return (
    <div className={styles.diet} onClick={navigateToPath}>
      <div>
        <img src={img} alt="" />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default DietComp;
