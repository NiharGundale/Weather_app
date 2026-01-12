import { useState } from 'react'


// import './App.css'
import Button from '@mui/material/Button';

// import WeatherApp from './WeatherApp.jsx';
import WeatherApp from './WeatherApp';
import "./color.css";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='Appclass'>
      <WeatherApp/>
    </div>
        
    </>
  )
}

export default App
