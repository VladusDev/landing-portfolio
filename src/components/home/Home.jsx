import styles from "./Home.module.scss";

import { Button, ButtonColor } from "../button/Button";

import homeImg from "../../assets/images/home/home-img.png";
import { Inst, Linkedin, Dribble, Behance } from "../icons/Icons";

function Home() {
  const width = window.innerWidth;

  return (
    <div className="container">
      <section className={styles.home}>
        <div className={styles.sectionLeft}>
          <div className={styles.homePresent}>
            <h4>Hi I am</h4>
            <h3>Mahmood Fazile</h3>
          </div>
          <div className={styles.homeTitle}>UI/UX designer</div>
          <div className={styles.homeSocials}>
            <div className={styles.socialRow}>
              <a href="#">
                <li>
                  <Inst />
                </li>
              </a>
              <a href="#">
                <li>
                  <Linkedin />
                </li>
              </a>
              <a href="#">
                <li>
                  <Dribble />
                </li>
              </a>
              <a href="#">
                <li>
                  <Behance />
                </li>
              </a>
            </div>
          </div>
          <div className={styles.homeBtns}>
            <div className={styles.homeBtnsRow}>
              <ButtonColor fz={width < 768 ? 14 : 20}>Hire Me</ButtonColor>
              <Button fz={width < 768 ? 14 : 18}>Download CV</Button>
            </div>
          </div>
          <div className={styles.homeInfo}>
            <div className={styles.homeContent}>
              <div className={styles.homeInfoTitle}>5+</div>
              <div className={styles.homeInfoSubTitle}>Experiences</div>
            </div>
            <div className={styles.homeContent}>
              <div className={styles.homeInfoTitle}>20+</div>
              <div className={styles.homeInfoSubTitle}>Project done</div>
            </div>
            <div className={styles.homeContent}>
              <div className={styles.homeInfoTitle}>80+</div>
              <div className={styles.homeInfoSubTitle}>Happy Clients</div>
            </div>
          </div>
        </div>

        <div className={styles.homeImg}>
          <img src={homeImg} alt="HomeImg" />
        </div>
      </section>
    </div>
  );
}

export default Home;
