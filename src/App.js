import './App.css';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import NextHoursWeather from './NextHoursWeather';


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
