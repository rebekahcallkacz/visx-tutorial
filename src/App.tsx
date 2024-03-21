import { useState } from "react";

import "./App.css";
import LinePlot from "./components/LinePlot";
import { CITY_COLORS } from "./shared/constants";
import { CityColors, City } from "./shared/types";

function App() {
  const [selectedCity, setSelectedCity] = useState<City>("Austin");
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value as City);
  };
  return (
    <>
      <h1>A visx plot</h1>
      <select
        name="cities"
        id="cities"
        value={selectedCity}
        onChange={handleSelect}
      >
        {(Object.keys(CITY_COLORS) as Array<keyof CityColors>).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <div className="card">
        <LinePlot primaryCity={selectedCity} />
      </div>
    </>
  );
}

export default App;
