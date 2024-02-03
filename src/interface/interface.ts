export interface optionType {
  name: string;
  lat: number;
  lon: number;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface Day {
  date: string;
  weatherText: string;
  weatherIcon: string;
  minTemp: number;
  maxTemp: number;
}

export interface Tab {
    name: string;
    value: number;
}
