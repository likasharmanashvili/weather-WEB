import axios, { AxiosResponse } from "axios";
import WeatherDataS from "../types/common";
import React, { useState, useEffect } from "react";
import { BsClouds, RiSearchLine, FaTemperatureHalf, TbWind, MdOutlineWaterDrop } 
from "../Icons/index";


const WeatherData = () => {
const [cityName, setCityName] = useState("");
const [weatherData, setWeatherData] = useState<WeatherDataS | null>(null); 

 useEffect(() => {
    const fetchData = async () => {
    try {
     const response: AxiosResponse<WeatherDataS> = await axios.get(
     `https://api.weatherapi.com/v1/forecast.json?key=196cbe371f1c40f9ba3113741241402&q=${cityName}&days=7&aqi=yes&alerts=no`
     );
 setWeatherData(response.data);
 } catch (error) {
   console.error("Error fetching weather data:", error);
 }
 };

  if (cityName !== "") {
  fetchData();
   }
  }, [cityName]);

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
      
};

    
return (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Location...."
        value={cityName}
        onChange={handleInputChange}
      />
      <button type="submit" className="submit">
        <span className="search"><RiSearchLine /></span>
      </button>
      <hr className="row"></hr>
    </form>
    
    {weatherData ? (
      <div className="formText">
        <p className="details">Weather Details...</p>
        <p className="current">{weatherData.current.condition.text}</p>
        <div className="formChild1"> 
          <h1 className="currentTemp">{weatherData.current.temp_c}°</h1>
          <div>
            <h2 className="cityN">{weatherData.location.name}</h2> 
            <h3 className="currentTime">{weatherData.current.last_updated}</h3>
          </div>
          <h1 className="cloudicon"> <BsClouds/></h1>
        </div>
        
        <div className="tempdiv">
          <div className="tempMax"> 
            <p className="span"> Temp Max </p>
            <p>{weatherData.forecast.forecastday[0].day.maxtemp_c}°C  <span className="maxIcon" ><FaTemperatureHalf /></span> </p>
          </div>
          <div className="tempMin">
            <p className="span">Temp Min</p>
            <p>{weatherData.forecast.forecastday[0].day.mintemp_c}°C <span className="minIcon"><FaTemperatureHalf /></span></p>
          </div>
          <div className="humidity">
            <p className="span">Humidity:</p> 
            <p>{weatherData.current.humidity}% <span><MdOutlineWaterDrop /></span></p>
          </div>
          <div className="cl">
            <p className="span">Cloudy: </p>
            <p>{weatherData.current.cloud}% <span ><BsClouds /></span></p>
          </div>
          <div className="wind">
            <p className="span">Wind: </p>
            <p>{weatherData.current.wind_kph} km/h <span><TbWind /></span></p>
          </div>
        </div>
        <hr></hr>
      </div>
    ) : (
      <div className="defaultDiv">

    
        
        <p className="details">Weather Details.....</p>
       
       
        <div className="formChild1"> 
          <h1 className="currentTemp">16°</h1>
          <div>
            <h2 className="cityN">Tbilisi</h2> 
            <h3 className="currentTime">06:09 - Monday, 9 Sep ‘23</h3>
          </div>
          </div>
       <div className="tempdiv">
       <h1 className="defaultH">THUNDERSTORM WITH LIGHT DRIZZLE</h1>

       <div className="tempMax"> 
            <p className="span"> Temp Max </p>
            <p>19° <span className="maxIcon" ><FaTemperatureHalf /></span> </p>
          </div>
          <div className="tempMin">
            <p className="span">Temp Min</p>
            <p>15° <span className="minIcon"><FaTemperatureHalf /></span></p>
          </div>

          <div className="humidity">
            <p className="span">Humidity:</p> 
            <p>58% <span><MdOutlineWaterDrop /></span></p>
          </div>

          <div className="cl">
            <p className="span">Cloudy: </p>
            <p>58% <span ><BsClouds /></span></p>
          </div>

          <div className="wind">
            <p className="span">Wind: </p>
            <p>16 km/h <span><TbWind /></span></p>
          </div>

       </div>





      </div>
    )}
  </div>
);
}

export default WeatherData;
