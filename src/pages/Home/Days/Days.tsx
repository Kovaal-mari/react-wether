import { Card } from "./Card";
import styles from "./Days.module.scss";
import React from "react";
import { Tabs } from "./Tabs";

interface Props {}

export interface Day {
  week_day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = (props: Props) => {
  const days: Day[] = [
    {
      week_day: "Сегодня",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      week_day: "Завтра",
      day_info: "29 авг",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь и солнце",
    },
    {
      week_day: "Ср",
      day_info: "30 авг",
      icon_id: "small_rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь",
    },
    {
      week_day: "Чт",
      day_info: "28 авг",
      icon_id: "mainly_cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      week_day: "Пт",
      day_info: "28 авг",
      icon_id: "rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      week_day: "Сб",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      week_day: "Вс",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
  ];
  return (
    <>
      <Tabs />
      <div className={styles.days}>
        {days.map((day: Day) => (
          <Card day={day} />
        ))}
      </div>
    </>
  );
};
