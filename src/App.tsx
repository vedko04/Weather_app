import './App.css'
import '@vega-ui/react/style.css';
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";
import MainWeather from "./components/main/main_weather.tsx";
import Characteristics from "./components/main/Characteristics.tsx";

function App() {

  return (
    <div className='app'>
      <Header/>
      <MainWeather/>
      <Characteristics/>
      <Footer/>
    </div>
  )
}

export default App
