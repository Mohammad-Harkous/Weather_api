import mostlycloudy from './images/weather-icons/mostlycloudy.svg';
import clear from './images/weather-icons/clear.svg';


function CurrentWeather() {
    return(
        <>

        <div className="wethear_now">
        <img className="image" src={mostlycloudy} alt="mostly cloudy" />
        <p className='color'> <strong>overcast cloud</strong></p>
        <p><strong>Temperature</strong> &nbsp;&nbsp;10<span>&#176;</span> to 11<span>&#176;</span>C</p>
        <p className='size'><strong>Humidity</strong> &nbsp;&nbsp;78<span>&#37;</span>&nbsp;&nbsp;<strong>Pressure</strong>&nbsp;&nbsp;1008.48</p>
      </div>

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

      </>
    );
}
export default CurrentWeather;