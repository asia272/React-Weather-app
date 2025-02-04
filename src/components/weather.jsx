import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city_name: "Karachi",
        feelsLike: 290.25,
        temp: 291.05,
        tempMax: 291.05,
        tempMin: 291.05,
        weather:"haze", 
        humidity: 52,
    })

    let updateWeather = (result) => {
        setWeatherInfo(result);
    };



    return(
    <>
    <SearchBox updateWeather={updateWeather} />
    <InfoBox info={weatherInfo} />
    </>)
}