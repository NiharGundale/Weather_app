import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search_box.css"
import { useEffect, useState } from 'react';
// import.meta.env.VITE_*


function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const api_key=import.meta.env.VITE_API_KEY;

    let getweatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${api_key}&units=metric`);
        let jsonResponse=await response.json();
        
        let result={

            cityName:jsonResponse.name,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            temtMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        console.log(result);
        updateInfo(result);
        // console.log(jsonResponse);

        }
        catch(err){
            setError(true);
        }
    }
    
    let handleChange=(event)=>{
        setCity(event.target.value);
        console.log(event.target.value);
    };

    let HandleSubmit=(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            getweatherInfo();
            setCity("");
        }catch(err){
            setError(true);
        }
        
    }

    useEffect(()=>{
        if(error==true){
            setTimeout(()=>{
                setError(false)
            },3000)
            // setError(false);
        }
    },[error]);

    return(
        <>
            <h2>Search For Weather of Your City</h2>
            <div className='SearchBox' >
                <form onSubmit={HandleSubmit} method='get'>
                   
                    <TextField 
                        id="outlined-basic" 
                        label="Search City" 
                        variant="outlined"
                        onChange={handleChange} 
                        required/>
                    <br /><br />
                    <Button variant="contained" type='submit'>
                        SEARCH
                    </Button>
                    {/* {error && <p style={{color:"red"}}>No such Place Exist!</p>} */}
                    {error?<p style={{color:"red"}}>No such Place Exist!</p>: <p></p>}
                

                </form>
                

            </div>
            
        </>
    )
}

export default SearchBox;