import './Characteristics.css';

interface CharacteristicsProps {
    weatherData: any;
}

const Characteristics = ({ weatherData }: CharacteristicsProps) => {

    const sunriseTimestamp: number = weatherData.sys.sunrise;
    const sunriseDate: Date = new Date(sunriseTimestamp * 1000);
    const formattedTime: string = sunriseDate.toLocaleTimeString('ru-RU');

    const sunsetTimestamp: number = weatherData.sys.sunset;
    const sunsetDate: Date = new Date(sunsetTimestamp * 1000);
    const formattedTimesunset: string = sunsetDate.toLocaleTimeString('ru-RU');

    const visible: number = weatherData.visibility / 1000;

    function getWindDirection(deg: number): string {
        const directions = ['Северный', 'Северо-Восточный', 'Восточный', 'Юго-Восточный', 'Южный', 'Юго-Западный', 'Западный', 'Северо-Западный'];
        const index = Math.round(deg / 45) % 8;
        return directions[index];
    }

    function convertHpaToMmHg(hpa: number): number {
        // 1 гПа ≈ 0.750062 мм рт. ст.
        return Math.round(hpa * 0.750062);
    }

    return (
        <section className="Characteristics">
            <div className="container">
                <h3 className="name">Характерисики</h3>
                <p className="data">сейчас</p>
            </div>
            <div className="container_grid">
                <ul className="characteristics_list">
                    <li className="characteristics_item">
                        <div className="icon_name">
                            <p className="name_characteristics">Ветер</p>
                        </div>
                        <div className="number_name_characteristics">
                            <h3 className="number number_characteristics">{weatherData.wind.gust}</h3>
                            <p className='underNumber'>m/s</p>
                        </div>
                        <p className="zaglushka">{getWindDirection(weatherData.wind.deg)}</p>
                    </li>
                    <li className="characteristics_item">
                        <div className="icon_name">
                            <p className="name_characteristics">Влажность</p>
                        </div>
                        <div className="number_name_characteristics">
                            <h3 className="number number_characteristics">{weatherData.main.humidity}</h3>
                            <p className='underNumber'>%</p>
                        </div>
                        <p className="zaglushka">bar</p>
                    </li>
                    <li className="characteristics_item">
                        <div className="icon_name">
                            <p className="name_characteristics">Давление</p>
                        </div>
                        <div className="number_name_characteristics">
                            <h3 className="number number_characteristics">{convertHpaToMmHg(weatherData.main.grnd_level)}</h3>
                            <p className='underNumber'>mm</p>
                        </div>
                        <p className="zaglushka">Стабильное</p>
                    </li>

                    <li className="characteristics_item">
                        <div className="icon_name">
                            <p className="name_characteristics">Видимость</p>
                        </div>
                        <div className="number_name_characteristics">
                            <h3 className="number number_characteristics">{visible}</h3>
                            <p className='underNumber'>km</p>
                        </div>
                        <p className="zaglushka">Отличная</p>
                    </li>

                    <li className="characteristics_item">
                        <div className="icon_name">
                            <p className="name_characteristics">Восход</p>
                        </div>
                        <div className="number_name_characteristics">
                            <h3 className="number number_characteristics">{formattedTime}</h3>
                        </div>
                        <p className="zaglushka">День 16ч 28м</p>
                    </li>
                    <li className="characteristics_item">
                        <div className="icon_name">
                            <p className="name_characteristics">Закат</p>
                        </div>
                        <div className="number_name_characteristics">
                            <h3 className="number number_characteristics">{formattedTimesunset}</h3>
                        </div>
                        <p className="zaglushka">Сумерки 23:05</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Characteristics;