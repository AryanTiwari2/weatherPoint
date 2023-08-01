import React ,{useState,useEffect} from "react";
import "react-icons/wi";
import "./Page.css";
const Page = (props)=>
{
  let sec = props.object.sunset;
  let date = new Date(sec*1000);
  let timer = `${date.getHours()}:${date.getMinutes()}`;
  const [weatherclass,setWeatherClass] = useState('');
  useEffect(()=>
  {
    if(props.object.mood)
    {
       let k = props.object.mood;
       switch (k) {
        case 'Clouds':
            setWeatherClass("wi wi-day-cloudy");
          break;
        case 'Haze':
            setWeatherClass("wi wi-day-haze");
          break;
        case 'Mist':
            setWeatherClass("wi wi-fog");
          break;
        case 'Clear':
            setWeatherClass("wi wi-day-sunny");
          break;
          case 'Rain':
            setWeatherClass("wi wi-day-rain");
          break;
          case 'Smoke':
            setWeatherClass("wi wi-smog");
          break;
        default:
           setWeatherClass("wi wi-day-sunny");
          break;
       }
    }
  },[props.object.mood])
    return (
        <>
        <div className="main-box">
        <div className="icon-div"><i className={`${weatherclass} weather-icon`}></i></div>
        <div className="weatherInfo">
          <div className="temp"><p>{props.object.temp}&deg; C</p></div>
          <div className="box">
          <div className="mood">{props.object.mood}</div>
          <div className="place">{props.object.name},{props.object.country}</div>
          </div>
          <div className="time">
            <p>{new Date().toLocaleTimeString()}</p>
            <p>{new Date().toLocaleDateString()}</p>
            </div>
        </div>

        <div className="last-line">

          <div className="lastInfo">
            <i className="wi wi-sunset"></i>
            <div className="last">
            <span className="upper">{timer} PM</span>
            <span className="lower">Sunset</span>
            </div>
          </div>

          <div className="lastInfo">
            <i className="wi wi-humidity"></i>
            <div className="last">
            <span className="upper">{props.object.humidity}</span>
            <span className="lower">Humidity</span>
            </div>
          </div>

          <div className="lastInfo">
            <i className="wi wi-dust"></i>
            <div className="last">
            <span className="upper">Pressure</span>
            <span className="lower">{props.object.pressure} MM</span>
            </div>
          </div>

          <div className="lastInfo">
            <i className="wi wi-strong-wind"></i>
            <div className="last">
            <span className="upper"> Wind</span>
            <span className="lower">{props.object.speed} mph</span>
            </div>
          </div>
        </div>
            </div>
        </>
    );
}
export default Page;