import './App.css'
import '@vega-ui/react/style.css';
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";
import MainWeather from "./components/main/main_weather.tsx";

function App() {

  return (
    <>
      <Header></Header>
      <MainWeather></MainWeather>
      <Footer></Footer>
    </>
  )
}

export default App
