import './Characteristics.css';
import Characteristic_cell from "./Characteristic_cell.tsx";
import {Slider, SliderProgress} from "@vega-ui/react";

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

    function NormalHpaToMmHg (num: number): string {
        if (750 <= num && num <= 765) return 'В норме';
        if (num > 765) return 'Выше нормы';
        return 'Ниже нормы';
    }

    function Bar(num: number): React.ReactNode {
        return (
        <Slider
            onChangeValue={function cV(){}}
            style={{
                maxWidth: '400px'
            }}
            value={num}
        >
            <SliderProgress />
        </Slider>
        );
    }

    return (
        <section className="Characteristics">
            <div className="container">
                <h3 className="name">Характерисики</h3>
                <p className="data">сейчас</p>
            </div>
            <div className="container_grid">
                <ul className="characteristics_list">
                    <Characteristic_cell name={'Ветер'} discription={'m/s'} mainParameters={weatherData.wind.gust} minorParameters={getWindDirection(weatherData.wind.deg)}/>
                    <Characteristic_cell name={'Влажность'}  discription={'%'} mainParameters={weatherData.main.humidity} minorParameters={Bar(weatherData.main.humidity)}/>
                    <Characteristic_cell name={'Давление'} discription={'mm'} mainParameters={convertHpaToMmHg(weatherData.main.grnd_level)} minorParameters={NormalHpaToMmHg(convertHpaToMmHg(weatherData.main.grnd_level))}/>
                    <Characteristic_cell name={'Видимость'} discription={'km'} mainParameters={visible} minorParameters={'Отличная'}/>
                    <Characteristic_cell name={'Восход'} discription={''} mainParameters={formattedTime} minorParameters={'День 16ч 28м'}/>
                    <Characteristic_cell name={'Закат'} discription={''} mainParameters={formattedTimesunset} minorParameters={'Сумерки 23:05'}/>
                </ul>
            </div>
        </section>
    );
};

export default Characteristics;