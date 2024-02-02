import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import styles from "./Popup.module.scss";
import React from "react";

interface Props {
  items: Item;
}

export const Popup = (props: Props) => {
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
    <>
      <div className={styles.blur}>
        <div className={styles.popup}>
          <div className={styles.day}>
            <div className={styles.day_temp}>20°</div>
            <div className={styles.day_name}>Середа</div>
            <div className={styles.img}>
              <GlobalSvgSelector id="sun" />
            </div>
            <div className={styles.this_time}>
              Година: <span>21:54</span>
            </div>
            <div className={styles.this_city}>
              Місто: <span>Київ</span>
            </div>
          </div>
          <div className={styles.this_day_info_items}>
            {items.map((item: Item) => (
              <ThisDayItem key={item.icon_id} item={item} />
            ))}
          </div>
          <div className={styles.close}>
            <GlobalSvgSelector id="close" />
          </div>
        </div>
      </div>
    </>
  );
};
