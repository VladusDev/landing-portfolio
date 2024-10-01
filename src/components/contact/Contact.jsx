import styles from "./Contact.module.scss";
import Form from "./Form";

function Contact() {
  return (
    <div className="container">
      <section className={styles.contact}>
        <div className={styles.content}>
          <div className={styles.title}>Contact Me</div>
          <div className={styles.subTitle}>
            Cultivating Connections: Reach Out and Connect with Me
          </div>
        </div>

        <div className={styles.contactForm}>
          <Form />
        </div>
      </section>
    </div>
  );
}

export default Contact;
