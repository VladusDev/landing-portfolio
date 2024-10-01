import { Button } from "../button/Button";
import styles from "./Contact.module.scss";

function Form() {
  return (
    <form>
      <div className={styles.inputRow}>
        <div className={styles.inputLeft}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Timeline" />
        </div>
        <div className={styles.inputRight}>
          <input type="email" placeholder="Email" />
          <div className={styles.select}>
            <select>
              <option className={styles.firstVar} disabled selected hidden>
                Service Of Interest
              </option>
              <option>Websites Design</option>
              <option>Game Design</option>
              <option>Mobile Design</option>
            </select>
          </div>
          <textarea
            className={styles.textarea}
            name="Project Details"
            placeholder="Project Details"
          ></textarea>
          <div className={styles.btnSend}>
            <Button fz={20}>Send</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
