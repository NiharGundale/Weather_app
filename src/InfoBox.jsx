import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";


const InfoBox=({info})=>{
    // let img_url="https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    let hot_image_url="https://plus.unsplash.com/premium_photo-1764691205156-72b599a1ffdb?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cold_image_url="https://images.unsplash.com/photo-1644803188798-f87b4e482452?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rain_image_url="https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <>
        <div className="infobox">
                {/* <h1>WeatherInfo-{info.weather}</h1> */}
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?rain_image_url:(info.temp >15 ? hot_image_url:cold_image_url)}
                        title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.cityName} &nbsp;{info.humidity>80?<ThunderstormIcon/>:(info.temp >15 ? <SunnyIcon/>:<AcUnitIcon/>)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperture = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.temtMax}&deg;C</p>
                        <p>The Weather can be described as <b><i>{info.weather}</i></b> and feels like <b>{info.feelsLike}&deg;C</b>. </p>
                    </Typography>
                </CardContent>
                
            </Card>

            </div>
            
        </div>
        </>
    )
}

export default InfoBox;