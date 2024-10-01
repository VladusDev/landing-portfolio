import {
  Behance,
  Dribble,
  EmailIcon,
  Inst,
  Linkedin,
  PhoneIcon,
} from "../icons/Icons";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <a href="/">V-DEV</a>
          </div>
          <div className={styles.footerNav}>
            <nav className={styles.footerNavList}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About me</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Contact me</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
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

        <div className={styles.info}>
          <div className={styles.infoContent}>
            <div className={styles.infoMail}>
              <EmailIcon />
              <p>vlad.ssap@gmail.com</p>
            </div>
            <div className={styles.infoPhone}>
              <PhoneIcon />
              <p>+7(999)-999-99-99</p>
            </div>
          </div>
        </div>

        <div className={styles.borderLine}></div>
        <div className={styles.desc}>Developer — Vladislav Bulgakov</div>
      </div>
    </footer>
  );
}

export default Footer;
