import './App.css';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import NextHoursWeather from './components/NextHoursWeather';

function App() {
  
  return (
    <div className="App">
      <Search />
    <main>
     <CurrentWeather /> 
      <NextHoursWeather />
    </main>
    </div>
  );
}

export default App;
