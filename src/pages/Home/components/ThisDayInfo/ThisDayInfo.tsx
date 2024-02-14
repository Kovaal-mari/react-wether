import cloud from "../../../../assets/images/could.webp";
import { useAppSelector } from "../../../../store/hooks";
import styles from "./ThisDayInfo.module.scss";
import { ThisDayItem } from "./ThisDayItem";

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = () => {
  const state = useAppSelector((state) => state.weather);

  const items = [
    {
      icon_id: "temp",
      name: "Temperature",
      value: `${Math.round(
        state.city.current.temp_c
      )}°. Feels like ${Math.round(state.city.current.feelslike_c)}°`,
    },
    {
      icon_id: "pressure",
      name: "Pressure",
      value: state.city.current.pressure_mb,
    },
    {
      icon_id: "precipitation",
      name: "Wind",
      value: `${state.city.current.wind_kph} km/h`,
    },
  ];

  console.log("state", state);
  return (
    <div className={styles.this_day_info}>
      <div className={styles.this_day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={styles.cloud_image} src={cloud} alt="Хмаринка" />
    </div>
  );
};
