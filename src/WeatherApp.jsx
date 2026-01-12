import SearchBox from './Search_box.jsx';
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
      cityName:"Pune",
            temp:26.06,
            tempMin:26.06,
            temtMax:26.06,
            humidity:24,
            feelsLike:19,
            weather:"Clear sky",
    })

    let UpdateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }

    return(
        <>

            <h1>Weather App by Nihar</h1>
            <SearchBox updateInfo={UpdateInfo}/>
            <br />
            <InfoBox info={weatherInfo}/>
        </>
    )
}