import { Day } from "../../../interface/interface";
import styles from "./Days.module.scss";

interface Props {
  day: Day;
}

export const Card = ({ day }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.week_day}> {day.date}</div>
      <div className={styles.day_info}> {day.weatherText}</div>
      <div className={styles.img}>
        {/* <GlobalSvgSelector id={icon_id} /> */}
        <img className={styles.weather_icon} src={day.weatherIcon} />
      </div>
      <div>
        <div className={styles.temp_day}> {day.maxTemp}°</div>
        <div className={styles.temp_night}> {day.minTemp}°</div>
      </div>
    </div>
  );
};
