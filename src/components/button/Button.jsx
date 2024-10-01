import styles from "./Button.module.scss";

export const ButtonColor = ({ children, fz }) => (
  <button style={{ fontSize: fz }} className={styles.btnColor}>
    {children}
  </button>
);

export const Button = ({ children, fz }) => (
  <button style={{ fontSize: fz }} className={styles.btn}>
    {children}
  </button>
);
