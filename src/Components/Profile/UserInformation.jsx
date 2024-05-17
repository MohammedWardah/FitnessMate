import styles from "./UserInformation.module.css";

import gender from "../../assets/UI/gender.png";
import calender from "../../assets/UI/calender.png";
import height from "../../assets/UI/height.png";
import weight from "../../assets/UI/weight.png";

const UserInformation = () => {
  return (
    <>
      <div className={styles.card}>
        <span>Last updated: </span>
        <p>Today</p>
      </div>
      <section className={styles.userInfo}>
        <div>
          <img src={gender} alt="gender" />
          <span>Gender</span>
          <div className={styles.selectBox}>
            <select name="gender" className={styles.selection} id="gend">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div>
          <img src={calender} alt="" />
          <span>Date of Birth</span>
          <div className={styles.selectBox}>
            <input type="date" name="dob" defaultValue="2000-01-01" className={styles.selection} />
          </div>
        </div>
        <div>
          <img src={height} alt="" />
          <span>Height</span>
          <div className={`${styles.selectBox} ${styles.numInp}`}>
            <input
              type="number"
              name="height"
              defaultValue="178"
              min="150"
              max="200"
              className={styles.selection}
            />
            <span>Cm</span>
          </div>
        </div>
        <div>
          <img src={weight} alt="" />
          <span>Weight</span>
          <div className={`${styles.selectBox} ${styles.numInp}`}>
            <input
              type="number"
              name="weight"
              defaultValue="72"
              min="30"
              max="150"
              className={styles.selection}
            />
            <span>Kg</span>
          </div>
        </div>
        <div className={styles.btn}>
          <button>Update</button>
        </div>
      </section>
    </>
  );
};

export default UserInformation;
