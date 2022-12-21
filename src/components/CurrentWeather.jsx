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

/*light rain*/
/*broken clouds*/
/*moderate*/
/*moderate rain*/
/*overcast clouds*/
/*clear sky*/

/*scattered clouds*/
/*few clouds*/

function CurrentWeather({values}) {

    var images = values.weather[0].description;
    switch (images) {
        case 'clear sky':
            images = clear;
        break;

        case 'moderate':
            images = partlycloudy;
        break;

        case 'light rain':
            images = drizzle;
        break;

        case 'moderate rain':
            images = drizzle;
        break;

        case 'overcast clouds':
            images = mostlycloudy;
        break;

        case 'scattered clouds':
            images = mostlycloudy;
        break;

        case 'broken clouds':
            images = cloudly;
        break;

        default:
            images = unknown;
    }
    
   
    return(
        <div className="wethear_now">
            <img className="image" src={images} alt="mostly cloudy" />
            <p className='color'> <strong>{(values.weather[0].description)}</strong></p>
            <p><strong>Temperature</strong> &nbsp;&nbsp; {(Math.floor(((values.main.temp_min) - 273.15 )))} <span>&#176;</span> to {(Math.floor(((values.main.temp_max) - 273.15 )))}<span> &#176;</span>C</p>
            <p className='size'><strong>Humidity</strong> &nbsp;&nbsp;{(values.main.humidity)}<span>&#37;</span>&nbsp;&nbsp;<strong>Pressure</strong>&nbsp;&nbsp; {(values.main.pressure)}</p>
        </div>
    );
}
export default CurrentWeather;