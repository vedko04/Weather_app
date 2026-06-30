import './main_weather.css'
import {Icon} from "@vega-ui/react";
import {MapPin, Cloud, ArrowUp, ArrowDown, Sun, CloudRain, CloudDrizzle, CloudRainWind} from "@vega-ui/icons";

interface MainWeatherProps {
    weatherData: any;
}

const weatherComponents: Record<string, React.ComponentType> = {
    "Clouds": Cloud,
    "Clear": Sun,
    "Rain": CloudRain,
    "Drizzle": CloudDrizzle,
    "Thunderstorm": CloudRainWind
};

const MainWeather = ({weatherData}: MainWeatherProps) => {

    const dtTimestamp: number = 1782780605;

    const calculationDate: Date = new Date(dtTimestamp * 1000);

    const formattedDateTime: string = calculationDate.toLocaleString('ru-RU');


    const apiWeatherStatus = weatherData.weather[0].main;
    const WeatherIcon = weatherComponents[apiWeatherStatus] || Cloud;

    /*const API_KEY = '40b65fdc35db658fafc366266acc9a0b';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;*/

    return (
        <section className="main_weather">
            <div className="main_info">
                <div className="region_info">
                    <Icon className="logo_region"><MapPin/></Icon>
                    <h2 className='region'>{weatherData.name}</h2>
                </div>
                <p className="data">{formattedDateTime}</p>
                <div className="temperature_info">
                    <h2 className="temperature">{Math.round(weatherData.main.temp)}</h2>
                    <p className="celcia">°C</p>
                </div>
                <p className="weather_temperature">Ощущается как {Math.round(weatherData.main.feels_like)}°</p>
                <div className="min_max_temperature">
                    <div className="temperature_div">
                        <Icon className="max"><ArrowUp/></Icon>
                        <p className="number_temperature max">{Math.round(weatherData.main.temp_max)}°</p>
                        <p className="name_temperature">макс</p>
                    </div>
                    <div className="temperature_div">
                        <Icon className="min"><ArrowDown/></Icon>
                        <p className="number_temperature min">{Math.round(weatherData.main.temp_min)}°</p>
                        <p className="name_temperature">мин</p>
                    </div>
                </div>
            </div>
            <div className="weather_day">
                <Icon className='IconWeather'><WeatherIcon/></Icon>
                <div className="weather_day_info">
                    <p className="weather_name">{weatherData.weather[0].description}</p>
                </div>
            </div>
        </section>
    );
};

export default MainWeather;