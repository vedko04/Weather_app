import './main_weather.css'
import {Icon} from "@vega-ui/react";
import {MapPin, Cloud, ArrowUp, ArrowDown} from "@vega-ui/icons";

const MainWeather = () => {
    return (
        <section>
            <div className="main_info">
                <div className="region_info">
                    <Icon><MapPin/></Icon>
                    <h2 className='region'>Москва, Россия</h2>
                </div>
                <p className="data">Понедельник, 22 июня</p>
                <div className="temperature_info">
                    <h2 className="temperature">12</h2>
                    <p className="celcia">°C</p>
                </div>
                <div className="weather_day">
                    <Icon><Cloud/></Icon>
                    <div className="weather_day_info">
                        <p className="wether_name">Переменная облачность</p>
                        <p className="weather_temperature">Ощущается как 10°</p>
                    </div>
                </div>
                <div className="min_max_temperature">
                    <div className="temperature">
                        <Icon><ArrowUp/></Icon>
                        <p className="number_temperature">14°</p>
                        <p className="name_temperature">макс</p>
                    </div>
                    <div className="temperature">
                        <Icon><ArrowDown/></Icon>
                        <p className="number_temperature">6°</p>
                        <p className="name_temperature">мин</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MainWeather;