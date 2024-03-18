import { useState } from 'react';
import './App.css';

const api = {
  key: '49ec060eb1c2de437d6b448636566a87',
  base: 'https://api.openweathermap.org/data/2.5/'
}


function App() {
  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState({})


  const clickHandle = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* header */}
        <h1>Weather App</h1>

        {/* input */}

        <div>
          <input type="text"
            placeholder='Enter town/ city...'
            onChange={e => setSearch(e.target.value)}
          />

          <button onClick={clickHandle}>Search</button>
        </div>

        
        {typeof weather.main != 'undefined' ? 
        <div>
        {/* City */}
        <p>{weather.name}</p>

        {/* Temp */}
        <p>{weather.main.temp} C</p>

        {/* Desc */}
        <p>{weather.weather[0].main}</p>
        <p>{weather.weather[0].description}</p>
      </div>
        : 
        ''}
      </header>
    

    </div >
  );
}

export default App;
