import mostlycloudy from './images/weather-icons/mostlycloudy.svg';

function CurrentWeather() {
    return(
        <div className="wethear_now">
            <img className="image" src={mostlycloudy} alt="mostly cloudy" />
            <p className='color'> <strong>overcast cloud</strong></p>
            <p><strong>Temperature</strong> &nbsp;&nbsp;10<span>&#176;</span> to 11<span>&#176;</span>C</p>
            <p className='size'><strong>Humidity</strong> &nbsp;&nbsp;78<span>&#37;</span>&nbsp;&nbsp;<strong>Pressure</strong>&nbsp;&nbsp;1008.48</p>
        </div>
    );
}
export default CurrentWeather;