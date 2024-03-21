export interface CityTemperature {
    date: string;
    "New York": string;
    "San Francisco": string;
    Austin: string;
  }
  
  export type CityColors = Pick<
    CityTemperature,
    "Austin" | "New York" | "San Francisco"
  >;

  export type City = keyof CityColors;