import mostlycloudy from '../images/weather-icons/mostlycloudy.svg';
import clear from '../images/weather-icons/clear.svg';
import fw from '../data/fw.json'
import rain from '../images/weather-icons/rain.svg';


function NextHoursWeather(){

    

    /*
    useEffect( () => {
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=london&cnt=8&appid=a69752920750f500833942e2d4a71e4a')
            .then(res => {
              return res.json();
            })
            .then(data => {
                setDaily(data);
            });
            
      },[]);
      */
    return(
        <div className='days'>
            <div className='info'>
                <p>03:00</p>
                <p>06:00</p>
                <p>09:00</p>
                <p>12:00</p>
                <p>15:00</p>
                <p>18:00</p>
                <p>21:00</p>
                </div>
                <div className='info'>
                <img src={rain} alt="light rain" />
                <img src={rain} alt="moderate rain" />
                <img src={rain} alt="light rain" />
                <img src={rain} alt="light rain" />
                <img src={rain} alt="light rain" />
                <img src={rain} alt="light rain" />
                <img src={rain} alt="light rain" />
                </div>
                <div className='info'>
                <p>{(Math.floor(((fw.list[5].main.temp) - 273.15 )))}&#176;C</p>
                <p>{(Math.floor(((fw.list[6].main.temp) - 273.15 )))}&#176;C</p>
                <p>{(Math.floor(((fw.list[7].main.temp) - 273.15 )))}&#176;C</p>
                <p>{(Math.floor(((fw.list[8].main.temp) - 273.15 )))}&#176;C</p>
                <p>{(Math.floor(((fw.list[9].main.temp) - 273.15 )))}&#176;C</p>
                <p>{(Math.floor(((fw.list[10].main.temp) - 273.15 )))}&#176;C</p>
                <p>{(Math.floor(((fw.list[11].main.temp) - 273.15 )))}&#176;C</p>
            </div>
     </div>
    );
}

export default NextHoursWeather;