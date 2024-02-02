import { Day } from "./Days";
import styles from "./Days.module.scss";
import React from "react";
import { GlobalSvgSelector } from "../../../assets/icons/global/GlobalSvgSelector";

interface Props {
  day: Day;
}

export const Card = ({ day }: Props) => {
  const { week_day, day_info, icon_id, temp_day, temp_night, info } = day;
  return (
    <div className={styles.card}>
      <div className={styles.week_day}> {week_day}</div>
      <div className={styles.day_info}> {day_info}</div>
      <div className={styles.img}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={styles.temp_day}> {temp_day}</div>
      <div className={styles.temp_night}> {temp_night}</div>
      <div className={styles.info}> {info}</div>
    </div>
  );
};
