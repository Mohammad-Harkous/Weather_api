import './App.css';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import NextHoursWeather from './components/NextHoursWeather';


function App() {

  const  [weather, setWeather] = useState('');
  const [cityName, setCityName] = useState ('london');


  
  function handleSubmit(name){
    
    setCityName(name) 
  }

  
  useEffect( () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=a69752920750f500833942e2d4a71e4a')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setWeather(data);
        });
        
  },[cityName]);

   

  return (
    <div className="App">
      <Search handleSubmit={handleSubmit}/>
    <main>
     {weather && <CurrentWeather values={weather}/>}
      <NextHoursWeather daily={weather} />
    </main>
    </div>
  );
}

export default App;
