import { Link } from "react-router-dom";
import { Days } from "./Days/Days";
import styles from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
      <p className={styles.ask_text}>
        Have any questions? Feel free to
        <Link to="/contact-us" className={styles.ask_link}>
          ask
        </Link>
        us about anything you want
      </p>
    </div>
  );
};
