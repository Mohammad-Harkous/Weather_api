import mostlycloudy from './images/weather-icons/mostlycloudy.svg';
import clear from './images/weather-icons/clear.svg';

function NextHoursWeather(){
    return(
        <div className='days'>
            <div className='info'>
                <p>03:00</p>
                <p>09:00</p>
                <p>09:00</p>
                <p>12:00</p>
                <p>15:00</p>
                <p>18:00</p>
                <p>21:00</p>
                </div>
                <div className='info'>
                <img src={mostlycloudy} alt="mostly cloudy" />
                <img src={mostlycloudy} alt="mostly cloudy" />
                <img src={clear} alt="clear" />
                <img src={clear} alt="clear" />
                <img src={clear} alt="clear" />
                <img src={clear} alt="clear" />
                <img src={mostlycloudy} alt="mostly cloudy" />
                </div>
                <div className='info'>
                <p>8&#176;C</p>
                <p>9&#176;C</p>
                <p>14&#176;C</p>
                <p>17&#176;C</p>
                <p>18&#176;C</p>
                <p>16&#176;C</p>
                <p>13&#176;C</p>
            </div>
     </div>
    );
}

export default NextHoursWeather;