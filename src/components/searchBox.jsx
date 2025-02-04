import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./searchBox.css"

export default function SearchBox({updateWeather}){
    let [city, setCity] = useState("");
    let [err,setError] = useState(false);

let Api_Url = "https://api.openweathermap.org/data/2.5/weather";
let my_Api_Key = "ff7a2c0abd5e3196b364ca634c94f95a";

let getWeather = async()=>{
  try {
    let data = await fetch(`${Api_Url}?q=${city}&appid=${my_Api_Key}`);
    let jsonRes = await data.json();
    console.log(jsonRes)
    let result = {
      feelsLike:jsonRes.main.feels_like,
      humidity:jsonRes.main.humidity,
      temp:jsonRes.main.temp,
      tempMax:jsonRes.main.temp_max,
      tempMin:jsonRes.main.temp_min,
      weather:jsonRes.weather[0].description,
      city_name:jsonRes.name,
    }
    return result;
  } catch (error) {
  throw error
  }
}
let handleChange = (event)=>{
    setCity(event.target.value)
}
let handleSubmit = async(event)=>{
  try {
    event.preventDefault();
    setCity("")
   let res = await getWeather();
   updateWeather(res)
   setError(false)
  } catch (error) {
    setError(true)
  }
 
}
    return(<>
      <div>
        <h1>Weather App</h1>
       <form action="" onSubmit={handleSubmit} className='searchBox'>
       <TextField id="city"
        label="Search City"
         variant="outlined"
         value={city} 
         onChange={handleChange} 
         required/>
       <Button type='submit' variant="contained">Search</Button>
       {err && <p style={{color:"red"}}>Location is not found!</p> }
       </form>
      </div>
    </>)
}