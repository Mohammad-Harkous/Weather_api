import './App.css';
import mostlycloudy from './images/weather-icons/mostlycloudy.svg';


function App() {
  return (
    <div className="App">
    <nav>
      <form>
      <input type="text" name="wethear" placeholder="Type in a city name"/>
      <button> FIND WEATHER</button>
      </form>
    </nav>
    <main>
      
      <div className="wethear_now">
        <img src={mostlycloudy} alt="clear"/>
      </div>

      
    </main>
    </div>
  );
}

export default App;
