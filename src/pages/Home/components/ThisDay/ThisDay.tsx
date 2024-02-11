import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../store/hooks";
import styles from "./ThisDay.module.scss";

export const ThisDay = () => {
  const [showContent, setShowContent] = useState(false);
  const state = useAppSelector((state) => state.weather);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.this_day}>
      <div className={styles.top_block}>
        {showContent && (
          <>
            <div className={styles.top_block_wrapper}>
              <div className={styles.this_temp}>
                {Math.round(state.city.current.temp_c)}°
              </div>
              <div className={styles.this_day_name}>Today</div>
            </div>
            <img
              className={styles.weather_icon}
              src={state.city.current.condition.icon}
            />
          </>
        )}
        {/* <GlobalSvgSelector id="sun" /> */}
      </div>
      <div className={styles.bottom_block}>
        {showContent && (
          <>
            <div className={styles.this_time}>
              Time:{" "}
              <span>
                {new Date(state.city.location.localtime)
                  .getHours()
                  .toString()
                  .padStart(2, "0")}
                :
                {new Date(state.city.location.localtime)
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <div className={styles.this_city}>
              City: <span>{state.city.location.name}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
