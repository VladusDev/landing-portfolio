import styles from "./Projects.module.scss";

// import work_1 from "../../assets/images/portfolio/work-1.png";

function Card({ obj }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardRow}>
        <div className={styles.cardImg}>
          <img src={obj.photo} alt="Work 1" />
        </div>
        <div className={styles.cardDesc}>
          <div className={styles.cardName}>{obj.name}</div>
          <div className={styles.cardCategory}>{obj.catName}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
