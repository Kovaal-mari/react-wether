import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { fetchCityByDefault } from "../../store/weatherSlice";
import { Days } from "./Days/Days";
import styles from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";

export const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCityByDefault());

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 360);

    return () => clearTimeout(timer);
  }, [dispatch]);
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay />
        {showContent && <ThisDayInfo />}
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
