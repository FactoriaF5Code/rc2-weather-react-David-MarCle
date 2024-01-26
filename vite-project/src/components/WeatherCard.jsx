


import icons from "./icons";

export default function WeatherCard({ weatherData }) {
  return (
    <div className="card">
      {weatherData ? (
        <div className="card__container">
          <h1 className="card__name">{weatherData.name}</h1>
          <p className="card__temp">Temp. Actual <span className="card__temp--size">{weatherData.main.temp}&deg;</span></p>
          <img className="card__icon" src={icons(weatherData.weather[0].main)} alt="icon" />
          <div className="card__footer">
            <p className="card__minmax">
              Max/Min  <span className="card__TempMin">{weatherData.main.temp_min}&deg;</span> / <span className="card__TempMax">{weatherData.main.temp_max}&deg;</span>
            </p>
          </div>
        </div>
      ) : (
        <h1>{"No se que ciudad es esa"}</h1>
      )}
    </div>
  );
}

