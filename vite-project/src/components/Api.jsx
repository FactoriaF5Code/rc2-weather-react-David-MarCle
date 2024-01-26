// Api.js
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Api.css";
import WeatherCard from "./WeatherCard";
import SearchForm from "./SearchForm";

export default function Api() {
  const [search, setSearch] = useState("oviedo");
  const [weatherData, setWeatherData] = useState(null);

  const key = "a259fc7cb99fb6a5662bfe50c2ddeef0";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${key}`;

  const getData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();

      if (data.cod >= 400) {
        setWeatherData(null);
      } else {
        setWeatherData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <main>
      <h1 className="main__title">el tiempo en tu ciudad</h1>
      <SearchForm onSearch={handleSearch} />
      <WeatherCard weatherData={weatherData} />
    </main>
  );
}
