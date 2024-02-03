import styles from "./ThisDayInfo.module.scss";
import React from "react";
import cloud from "../../../../assets/images/could.png";
import { ThisDayItem } from "./ThisDayItem";

interface Props {}
export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - відчувається як 17°",
    },
    {
      icon_id: "pressure",
      name: "Тиск",
      value: "765 мм ртутного стовпа - нормальний",
    },
    {
      icon_id: "precipitation",
      name: "Вітер",
      value: "3 м/c півдкнно західний - легкий вітер",
    },
    {
      icon_id: "wind",
      name: "Температура",
      value: "20° - відчувається як 17°",
    },
  ];
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