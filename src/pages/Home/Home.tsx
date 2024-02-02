import styles from "./Home.module.scss";
import React from "react";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./Days/Days";

interface Props {}

export const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};
