
import './App.css';
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer.js";


export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
   <h1>Weather App</h1>
      <WeatherSearch />
      </div>
       <Footer />
    </div>
 
  );

}
