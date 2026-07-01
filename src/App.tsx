import './App.css'
import '@vega-ui/react/style.css';
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";
import MainWeather from "./components/main/main_weather.tsx";
import Characteristics from "./components/main/Characteristics.tsx";
import {useEffect, useState} from "react";

function App() {

    const[weatherData, setWeatherData] = useState<any>(null);

    const[location, setLocation] = useState<string>('Paris');

    const handleGetData = (data: string) => {
        setLocation(data);
        console.log(location);
    }

    useEffect(() => {
        async function loadWeatherData(city: string): Promise<void> {
            try {
                const API_KEY = '40b65fdc35db658fafc366266acc9a0b';
                const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`;

                const res = await fetch(URL);
                if (!res.ok) throw new Error(`Ошибка: ${res.status}`);

                const data = await res.json();
                setWeatherData(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }

        loadWeatherData(location);
    }, [location]);

    if (!weatherData) {
        return <div className="main_weather">Загрузка данных о погоде...</div>;
    }

  return (
    <div className='app'>
      <Header onSearch={handleGetData} />
      <MainWeather weatherData={weatherData} />
      <Characteristics weatherData={weatherData}/>
      <Footer/>
    </div>
  )
}

export default App
