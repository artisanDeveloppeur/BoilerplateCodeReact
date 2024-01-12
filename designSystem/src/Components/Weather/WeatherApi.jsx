import { useEffect, useState } from "react";
import './../../../dist/styles/meteo.css'
import { useFetch } from "../../hooks/useFetch";
import { Spinner } from "../Feedback/Spinner";
import { Alert } from "../Feedback/Alert";
export function WeatherApi() {
  const VITE_WEATHERAPI_KEY = import.meta.env.VITE_WEATHERAPI_KEY

  const [cityName, setCityName] = useState("Liege");
  const [fetchErrorCity, setFetchErrorCity] = useState(false);
  //const [loading, setLoading] = useState(false);

  const { loading, data, error } = useFetch(`https://api.weatherapi.com/v1/forecast.json?key=${VITE_WEATHERAPI_KEY}&q=${cityName}&days=5`)
  console.log(data)

  const fetchData = (cityName) => {

    /** */

    /** */
  }

  const [weather, setWeather] = useState({
    temperature: null,
    feelsLike: null,
    conditionText: null,
    locationText: null,
    localtime: null,
    dayOfWeek: null,
    humidity: null,
    wind_kph: null,
    icon: null,
    forecast: [],
  });
  useEffect(() => {
    fetchData(cityName);
  }, []);



  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearchClick = (cityName) => {
    fetchData(cityName);
  };
  const handleCityChangeViaStorage = (cityName) => {
    setCityName(cityName);
    handleSearchClick(cityName)
  }

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>
  }
  return (
    <>
      <div className="container_body">
        <div className="container_meteo">
          <div className="weather-side">
            <div className="weather-gradient"><img src={weather.icon} alt="" /></div>
            <div className="date-container">
              <p className="location">{weather.name} - {weather.country}</p>

              <h2 className="date-dayname">{weather.dayOfWeek}</h2>
              <i className="location-icon" data-feather="map-pin"></i>
              <span className="location">{weather.locationText}</span>
            </div>
            <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
              <h1 className="weather-temp">{weather.temperature}°C</h1>
              <h3 className="weather-desc">{weather.conditionText}</h3>
            </div>
          </div>
          <div className="info-side">
            <div className="today-info-container">
              <div className="today-info">
                <div className="precipitation"><span className="title">WIND</span><span
                  className="value">{weather.wind_kph} km/h</span>
                  <div className="clear"></div>
                </div>
                <div className="humidity"><span className="title">HUMIDITY</span><span
                  className="value">{weather.humidity}%</span>
                  <div className="clear"></div>
                </div>
                <div className="wind"><span className="title">FELLING LIKE</span><span
                  className="value">{weather.feelsLike}°C</span>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
            <div className="week-container today-info">
              <span className="title">NEXT THREE DAYS</span>
              <ul className="week-list">
                {weather.forecast && weather.forecast.map((day) => (
                  <li key={day.dayOfWeek}>
                    <i className="day-icon" data-feather="cloud"><img src={day.icon}
                      alt="" /></i>
                    <span className="day-name">{day.dayOfWeek}</span>
                    <span className="day-temp">{day.maxTemp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="location-container">

              <input
                type="text"
                placeholder="Enter a city name"
                id="search-btn"
                className={`searchTerm${fetchErrorCity ? ' errorCity' : ''}`}
                value={cityName}
                onChange={handleCityChange}
              />
              <button className="location-button" onClick={() => handleSearchClick(cityName)}>
                <span>Change location</span>
              </button>
              {
                fetchErrorCity && (
                  <p className="text-error-city">
                    Wrong city
                  </p>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

