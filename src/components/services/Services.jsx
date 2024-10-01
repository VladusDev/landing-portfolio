import styles from "./Services.module.scss";

import { User } from "../icons/Icons";

function Services() {
  return (
    <div className="container">
      <section className={styles.services}>
        <div className={styles.servicesContent}>
          <div className={styles.servicesTitle}>Services</div>
          <div className={styles.servicesSubTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </div>

        <div className={styles.servicesCards}>
          <div className={styles.servicesCard}>
            <div className={styles.servicesCardIcon}>
              <User />
            </div>
            <div className={styles.servicesCardTitle}>App Design</div>
            <div className={styles.servicesCardSubTitle}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>

          <div className={styles.servicesCard}>
            <div className={styles.servicesCardIcon}>
              <User />
            </div>
            <div className={styles.servicesCardTitle}>App Design</div>
            <div className={styles.servicesCardSubTitle}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>

          <div className={styles.servicesCard}>
            <div className={styles.servicesCardIcon}>
              <User />
            </div>
            <div className={styles.servicesCardTitle}>App Design</div>
            <div className={styles.servicesCardSubTitle}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>

          <div className={styles.servicesCard}>
            <div className={styles.servicesCardIcon}>
              <User />
            </div>
            <div className={styles.servicesCardTitle}>App Design</div>
            <div className={styles.servicesCardSubTitle}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>

          <div className={styles.servicesCard}>
            <div className={styles.servicesCardIcon}>
              <User />
            </div>
            <div className={styles.servicesCardTitle}>App Design</div>
            <div className={styles.servicesCardSubTitle}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>

          <div className={styles.servicesCard}>
            <div className={styles.servicesCardIcon}>
              <User />
            </div>
            <div className={styles.servicesCardTitle}>App Design</div>
            <div className={styles.servicesCardSubTitle}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
