import { useNavigate } from "react-router-dom";

import styles from "./Watch.module.css";

import watch from "../../assets/UI/watch.png";
import watch_instance1 from "../../assets/UI/watch_instance1.png";
import watch_instance2 from "../../assets/UI/watch_instance2.png";
import events from "../../assets/UI/events.png";
import bell from "../../assets/UI/bell.png";
import update from "../../assets/UI/update.png";

const Watch = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("my-events");
  };

  const handleNavigationWebsite = () => {
    window.location.href = "https://www.mi.com/global/product/xiaomi-smart-band-7-pro/";
  };

  return (
    <section className={styles.watch}>
      <div className={styles.model}>
        <img src={watch} alt="watch" />
        <div>
          <h1>Xiaomi Band 7</h1>
          <h2>Device disconnected, tap to connect.</h2>
          <button>Connect</button>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.display} onClick={handleNavigationWebsite}>
        <div>
          <h1>Band displays</h1>
          <h2>Get your favorite displays online!</h2>
        </div>
        <img src={watch_instance1} alt="" />
        <img src={watch_instance2} alt="" />
      </div>
      <div className={styles.bottom} onClick={handleNavigation}>
        <img src={events} alt="" />
        <span>My events reminder</span>
      </div>
      <div className={styles.bottom}>
        <img src={bell} alt="" />
        <span>Notification management</span>
        <div className={styles.selectBox}>
          <select name="gender" className={styles.selection} id="gend">
            <option value="Sound">Sound</option>
            <option value="Vibrate">Vibrate</option>
            <option value="None">None</option>
          </select>
        </div>
      </div>
      <div className={styles.bottom}>
        <img src={update} alt="" />
        <span>software system update</span>
        <button>Check</button>
      </div>
    </section>
  );
};

export default Watch;
