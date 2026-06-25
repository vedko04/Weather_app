import './main_weather.css'
import {Icon} from "@vega-ui/react";
import {MapPin, Cloud, ArrowUp, ArrowDown, Sun} from "@vega-ui/icons";

const MainWeather = () => {
    return (
        <section className="main_weather">
            <div className="main_info">
                <div className="region_info">
                    <Icon className="logo_region"><MapPin/></Icon>
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
                    <div className="temperature_div">
                        <Icon className="max"><ArrowUp/></Icon>
                        <p className="number_temperature max">14°</p>
                        <p className="name_temperature">макс</p>
                    </div>
                    <div className="temperature_div">
                        <Icon className="min"><ArrowDown/></Icon>
                        <p className="number_temperature min">6°</p>
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