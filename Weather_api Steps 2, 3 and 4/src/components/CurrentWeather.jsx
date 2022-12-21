import clear from '../images/weather-icons/clear.svg';
import cloudly from '../images/weather-icons/cloudly.svg';
import drizzle from '../images/weather-icons/drizzle.svg';
import fog from '../images/weather-icons/fog.svg';
import mostlycloudy from '../images/weather-icons/mostlycloudy.svg';
import partlycloudy from '../images/weather-icons/partlycloudy.svg';
import rain from '../images/weather-icons/rain.svg';
import snow from '../images/weather-icons/snow.svg';
import storm from '../images/weather-icons/storm.svg';
import unknown from '../images/weather-icons/unknown.svg';
import fw from '../data/fw.json'
/*light rain*/
/*broken clouds*/
/*moderate*/
/*moderate rain*/
/*overcast clouds*/
/*clear sky*/

/*scattered clouds*/
/*few clouds*/

function CurrentWeather() {
// const CurrentWeather = () =>{
      
   
    return(
        <div className="wethear_now">
            <img className="image" src={cloudly} alt="broken clouds" />
            <p className='color'> <strong>{fw.list[4].weather.description}</strong></p>
            <p><strong>Temperature</strong> &nbsp;&nbsp; {(Math.floor(((fw.list[4].main.temp_min) - 273.15 )))} <span>&#176;</span> to {(Math.floor(((fw.list[4].main.temp_max) - 273.15 )))}<span> &#176;</span>C</p>
            <p className='size'><strong>Humidity</strong> &nbsp;&nbsp;{(fw.list[4].main.humidity)}<span>&#37;</span>&nbsp;&nbsp;<strong>Pressure</strong>&nbsp;&nbsp; {(fw.list[4].main.pressure)}</p>
        </div>
    );
}
export default CurrentWeather;