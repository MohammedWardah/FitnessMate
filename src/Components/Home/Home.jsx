import styles from "./Home.module.css";

import cals from "../../assets/UI/cals.svg";
import steps from "../../assets/UI/steps.svg";
import time from "../../assets/UI/time.svg";
import walking from "../../assets/UI/walking.png";
import running from "../../assets/UI/running.png";
import bicycle from "../../assets/UI/bicycle.png";

import OuterComp from "../UI/OuterComp";
import HorizontalBar from "../UI/HorizontalBar.jsx";
import HB3Levels from "../UI/HB3Levels.jsx";

import { overView } from "../../userData.js";

const Home = () => {
  return (
    <>
      <OuterComp height={160} title={"Today"}>
        <main className={styles.overview}>
          <section className={styles.section}>
            <div className={styles.barCals}>
              <div className={styles.barFillCals} style={{ width: `${overView.calsFill}%` }}></div>
            </div>
            <div className={styles.stats}>
              <img src={cals} alt="" />
              <span>
                {overView.cals} / {`${overView.setCals}Kcal`}
              </span>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.barSteps}>
              <div
                className={styles.barFillSteps}
                style={{ width: `${overView.stepsFill}%` }}></div>
            </div>
            <div className={styles.stats}>
              <img src={steps} alt="" />
              <span>
                {overView.steps} / {`${overView.setSteps}step`}
              </span>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.barTime}>
              <div className={styles.barFillTime} style={{ width: `${overView.timeFill}%` }}></div>
            </div>
            <div className={styles.stats}>
              <img src={time} alt="" />
              <span>
                {overView.time} / {`${overView.setTime}min`}
              </span>
            </div>
          </section>
        </main>
      </OuterComp>
      <OuterComp height={150} title={"Start a workout"}>
        <section className={styles.start}>
          <div>
            <img src={walking} alt="" />
            <p>Walking</p>
          </div>
          <div>
            <img src={running} alt="" />
            <p>Running</p>
          </div>
          <div>
            <img src={bicycle} alt="" />
            <p>Cycle</p>
          </div>
          <div>
            <div className={styles.burger}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p>More</p>
          </div>
        </section>
      </OuterComp>
      <OuterComp height={160} title={"Weekly workout summary"}>
        <section className={styles.weekly}>
          <div>
            <p>Mon</p>
            <div className={styles.day}>
              <div>
                <div style={{ height: `${overView.calsFill}%` }}></div>
              </div>
              <div>
                <div style={{ height: `${overView.stepsFill}%` }}></div>
              </div>
              <div>
                <div style={{ height: `${overView.timeFill}%` }}></div>
              </div>
            </div>
          </div>
          <div>
            <p>Tue</p>
            <div className={styles.day}>
              <div>
                <div style={{ height: `${overView.calsFill}%` }}></div>
              </div>
              <div>
                <div style={{ height: `${overView.stepsFill}%` }}></div>
              </div>
              <div>
                <div style={{ height: `${overView.timeFill}%` }}></div>
              </div>
            </div>
          </div>
          <div>
            <p>Wed</p>
            <div className={styles.day}>
              <div>
                <div style={{ height: `${80}%` }}></div>
              </div>
              <div>
                <div style={{ height: `${60}%` }}></div>
              </div>
              <div>
                <div style={{ height: `${70}%` }}></div>
              </div>
            </div>
          </div>
          <div>
            <p>Thu</p>
            <div className={styles.day}>
              <div>
                <div style={{ height: `${80}%` }}></div>
              </div>
              <div>
                <div style={{ height: `${60}%` }}></div>
              </div>
              <div>
                <div style={{ height: `${70}%` }}></div>
              </div>
            </div>
          </div>
          <div>
            <p>Fri</p>
            <div className={styles.day}>
              <div>
                <div style={{ height: `${40}%` }}></div>
              </div>
              <div>
                <div style={{ height: `${30}%` }}></div>
              </div>
              <div>
                <div style={{ height: `${50}%` }}></div>
              </div>
            </div>
          </div>
          <div>
            <p>Sat</p>
            <div className={styles.day}>
              <div>
                <div style={{ height: `${overView.calsFill}%` }}></div>
              </div>
              <div>
                <div style={{ height: `${overView.stepsFill}%` }}></div>
              </div>
              <div>
                <div style={{ height: `${overView.timeFill}%` }}></div>
              </div>
            </div>
          </div>
          <div>
            <p>Sun</p>
            <div className={styles.day}>
              <div>
                <div style={{ height: `${0}%` }}></div>
              </div>
              <div>
                <div style={{ height: `${0}%` }}></div>
              </div>
              <div>
                <div style={{ height: `${0}%` }}></div>
              </div>
            </div>
          </div>
        </section>
      </OuterComp>
      <OuterComp height={180} title={"Sleep"}>
        <section className={styles.weekly}>
          <div>
            <p>Mon</p>
            <div className={styles.sleep}>
              <div>
                <div style={{ height: `${overView.sleepFill}%` }}></div>
              </div>
            </div>
            <p className={styles.hours}>{`${overView.sleep}hr`}</p>
          </div>
          <div>
            <p>Tue</p>
            <div className={styles.sleep}>
              <div>
                <div style={{ height: `${75}%` }}></div>
              </div>
            </div>
            <p className={styles.hours}>{`${6}hr`}</p>
          </div>
          <div>
            <p>Wed</p>
            <div className={styles.sleep}>
              <div>
                <div style={{ height: `${60}%` }}></div>
              </div>
            </div>
            <p className={styles.hours}>{`${5}hr`}</p>
          </div>
          <div>
            <p>Thu</p>
            <div className={styles.sleep}>
              <div>
                <div style={{ height: `${overView.sleepFill}%` }}></div>
              </div>
            </div>
            <p className={styles.hours}>{`${overView.sleep}hr`}</p>
          </div>
          <div>
            <p>Fri</p>
            <div className={styles.sleep}>
              <div>
                <div style={{ height: `${100}%` }}></div>
              </div>
            </div>
            <p className={styles.hours}>{`${8}hr`}</p>
          </div>
          <div>
            <p>Sat</p>
            <div className={styles.sleep}>
              <div>
                <div style={{ height: `${0}%` }}></div>
              </div>
            </div>
            <p className={styles.hours}>{`${overView.sleep}hr`}</p>
          </div>
          <div>
            <p>Sun</p>
            <div className={styles.sleep}>
              <div>
                <div style={{ height: `${0}%` }}></div>
              </div>
            </div>
            <p className={styles.hours}>{`${overView.sleep}hr`}</p>
          </div>
        </section>
      </OuterComp>
      <OuterComp height={150} title={"Body composition"}>
        <HB3Levels label={"Weight"} fillLevel={50} ind1={60} ind2={80} />
        <HB3Levels label={"BMI"} fillLevel={26} ind1={18} ind2={25} />
      </OuterComp>
      <OuterComp height={120} title={"Heart"}>
        <HB3Levels label={"BPM"} fillColor={"#B71D39"} fillLevel={60} ind1={100} ind2={130} />
      </OuterComp>
      <OuterComp height={120} title={"Stress"}>
        <HorizontalBar
          label={"Index"}
          fillLevel={30}
          fillColor={"#653562"}
          ind1={"Relaxed"}
          ind2={"Mild"}
          ind3={"Stressed"}></HorizontalBar>
      </OuterComp>
      <OuterComp height={160} title={"Blood"}>
        <HorizontalBar
          label={"Oxygen"}
          fillLevel={95}
          fillColor={"#1F2EB7"}
          ind2={"50%"}></HorizontalBar>
        <HorizontalBar
          label={"Pressure"}
          fillLevel={50}
          fillColor={"#28D9CE"}
          ind1={"Low"}
          ind2={"Medium"}
          ind3={"High"}></HorizontalBar>
      </OuterComp>
    </>
  );
};

export default Home;
