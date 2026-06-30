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

    if (!weatherData || !weatherData.weather || !weatherData.weather[0] || !weatherData.main) {
        return <section className="main_weather">Загрузка данных погоды...</section>;
    }
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
                    <h2 className="temperature">{weatherData.main.temp}</h2>
                    <p className="celcia">°C</p>
                </div>
                <div className="weather_day">
                    <Icon><WeatherIcon /></Icon>
                    <div className="weather_day_info">
                        <p className="wether_name">{weatherData.weather[0].description}</p>
                        <p className="weather_temperature">Ощущается как {weatherData.main.feels_like}°</p>
                    </div>
                </div>
                <div className="min_max_temperature">
                    <div className="temperature_div">
                        <Icon className="max"><ArrowUp/></Icon>
                        <p className="number_temperature max">{weatherData.main.temp_max}°</p>
                        <p className="name_temperature">макс</p>
                    </div>
                    <div className="temperature_div">
                        <Icon className="min"><ArrowDown/></Icon>
                        <p className="number_temperature min">{weatherData.main.temp_min}°</p>
                        <p className="name_temperature">мин</p>
                    </div>
                </div>

            </div>
            <div className="line_weather_day">
                <h3>Почасовой прогноз</h3>
                <div className="chart_scroll">
                    <div className="scroll">
                        <div className="curve_wrap">
                            <ul className="list_temp">
                                <li className="item_temp">12</li>
                                <li className="item_temp">12</li>
                                <li className="item_temp">12</li>
                                <li className="item_temp">12</li>
                                <li className="item_temp">12</li>
                                <li className="item_temp">12</li>
                                <li className="item_temp">12</li>
                                <li className="item_temp">12</li>
                                <li className="item_temp">12</li>
                                <li className="item_temp">12</li>
                                <li className="item_temp">12</li>
                                <li className="item_temp">12</li>
                            </ul>
                        </div>
                        <div className="hours">
                            <ul className="list_hours">
                                <li className="item_hours"><Icon><Sun/></Icon><p>12</p></li>
                                <li className="item_hours"><Icon><Sun/></Icon><p>12</p></li>
                                <li className="item_hours"><Icon><Sun/></Icon><p>12</p></li>
                                <li className="item_hours"><Icon><Sun/></Icon><p>12</p></li>
                                <li className="item_hours"><Icon><Sun/></Icon><p>12</p></li>
                                <li className="item_hours"><Icon><Sun/></Icon><p>12</p></li>
                                <li className="item_hours"><Icon><Sun/></Icon><p>12</p></li>
                                <li className="item_hours"><Icon><Sun/></Icon><p>12</p></li>
                                <li className="item_hours"><Icon><Sun/></Icon><p>12</p></li>
                                <li className="item_hours"><Icon><Sun/></Icon><p>12</p></li>
                                <li className="item_hours"><Icon><Sun/></Icon><p>12</p></li>
                                <li className="item_hours"><Icon><Sun/></Icon><p>12</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainWeather;