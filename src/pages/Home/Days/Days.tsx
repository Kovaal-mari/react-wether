import { useEffect, useState } from "react";
import { Card } from "./Card";
import styles from "./Days.module.scss";
import { monthNames, tabs } from "../../../data/data";
import { Day, Tab } from "../../../interface/interface";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchCity } from "../../../store/weatherSlice";

export const Days = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);
  const [showContent, setShowContent] = useState(false);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.weather);

  const handleSelectedTab = (tab: Tab) => {
    return (event: React.MouseEvent) => {
      setSelectedTab(tab);
      dispatch(
        fetchCity({
          searchCity: state.city.location.name,
          days: tab.value,
        })
      );
      event.preventDefault();
    };
  };

  console.log(selectedTab);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      <div className={styles.tabs}>
        <div className={styles.tabs_wrapper}>
          {tabs.map((tab) => (
            <div
              className={styles.tab}
              key={tab.value}
              style={{
                backgroundColor:
                  tab.name === selectedTab.name ? "#4793ff" : "#fff",
              }}
              onClick={handleSelectedTab(tab)}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div
          onClick={() => handleSelectedTab(tabs[0])}
          className={styles.cansel}
        >
          Cancel
        </div>
      </div>
      {showContent && (
        <div
          className={styles.days}
          style={{
            justifyContent:
              state.city.forecast.forecastday.length <= 7 ? "space-between" : "flex-start",
              columnGap: state.city.forecast.forecastday.length <= 7 ? "0" : "18px",
          }}
        >
          {state.city.forecast.forecastday
            .map((day) => ({
              date: `${monthNames[new Date(day.date).getMonth()]} ${new Date(
                day.date
              ).getDate()}`,
              weatherText: day.day.condition.text,
              weatherIcon: day.day.condition.icon,
              minTemp: Math.round(day.day.mintemp_c),
              maxTemp: Math.round(day.day.maxtemp_c),
            }))
            .map((day: Day) => {
              return <Card day={day} key={day.date} />;
            })}
        </div>
      )}
    </>
  );
};
