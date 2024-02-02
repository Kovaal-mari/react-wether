import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import styles from "./Header.module.scss";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {}
export interface optionType {
  name: string;
  lat: number;
  lon: number;
}
export const Header = (props: Props): JSX.Element => {
  const APP_API_KEY = "df3985ac77c882760edb36893be3140b";
  const [term, setTerm] = useState<string>("");
  const [city, setCity] = useState<optionType | null>(null);
  const [options, setOptions] = useState<[]>([]);

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
    if (value === "") return;
    getSearchOptions(value);
  };

  const getForecast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=matric&appid=${APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => console.log({ data }));
  };

  const onSubmit = () => {
    if (!city) return;

    getForecast(city);
  };

  const onOpionSelect = (option: optionType) => {
    setCity(option);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={styles.title}>Weather ForeCasts</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme}>
          <GlobalSvgSelector id="change_theme" />
        </div>
        <div className={styles.search}>
          <input
            className={styles.input}
            type="text"
            value={term}
            onChange={onInputChange}
          />
          <ul>
            {options.map((option: optionType, index: number) => (
              <li key={option.name + "-" + index}>
                {" "}
                <button onClick={() => onOpionSelect(option)}>
                  {option.name}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={onSubmit}>Search</button>
        </div>
      </div>
    </header>
  );
};
