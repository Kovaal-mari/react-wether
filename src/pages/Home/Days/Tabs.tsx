import styles from "./Days.module.scss";
import React from "react";

interface Props {}

export const Tabs = (props: Props) => {
  const tabs = [
    {
      value: "На тиждень",
    },
    {
      value: "На 10 днів",
    },
    {
      value: "На місяць",
    },
  ];
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs_wrapper}>
        {tabs.map((tab) => (
          <div className={styles.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={styles.cansel}>Відмінити</div>
    </div>
  );
};
