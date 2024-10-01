import { ButtonColor } from "../button/Button";
import styles from "./Header.module.scss";

import burgerOpen from "../../assets/images/mobile/icon-menu.svg";
import burgerClosed from "../../assets/images/mobile/icon-menu-close.svg";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <header className={styles.header}>
        <button onClick={() => setIsOpen(true)} className={styles.headerBurger}>
          <img src={burgerOpen} alt="Menu" />
        </button>
        <div className={styles.headerLogo}>
          <a href="/">V-DEV</a>
        </div>
        <div className={styles.headerNav}>
          <nav
            className={
              isOpen
                ? styles.headerNavList + ` ` + styles.active
                : styles.headerNavList
            }
          >
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
              <button
                onClick={() => setIsOpen(false)}
                className={styles.headerBurgerClose}
              >
                <img src={burgerClosed} alt="Menu" />
              </button>
            </ul>
          </nav>
        </div>
        <div className={styles.headerBtn}>
          <ButtonColor>Hire Me</ButtonColor>
        </div>
      </header>
    </div>
  );
}

export default Header;
