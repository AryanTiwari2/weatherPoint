import React , {useState,useEffect} from "react";
import "./Weather.css";
import Page from "./Page";
const Weather = ()=>
{
    document.body.style.background = "rgb(200,200,400)";
    const [text,setText] = useState('pune');
    const [object,setObject] = useState({});
    const handle=(event)=>
    {
        setText(event.target.value);
    }
    const handlekey=(e)=>
    {
        let k = e.key;
        if(k==='Enter')
        {
            getData();
        }
    }
    const getData= async ()=>
    {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=09c3b16c31a7e5e2373056a3830a8f05`;
            let res = await fetch(url);
            let data = await res.json();
            // console.log(data);
            const {temp,pressure,humidity} = data.main;
            const {main:mood} = data.weather[0];
            const {name} = data;
            const {country,sunset} = data.sys;
            const {speed} = data.wind;
            const newData = {
                temp,pressure,humidity,
                mood,name,country,sunset,speed
            };
            setObject(newData);
            // console.log(object);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>
    {
        getData();
    },[])
    return (
        <>
        <h1>Weather Point</h1>
        <div className="input-box">
            <input type="text" placeholder="😉Enter city" className="input" value={text} onChange={handle} onKeyDown={handlekey}/>
            <button className="fa fa-search search-box" onClick={getData}></button>
        </div>
        <br /><br />
        <Page object = {object}/>
        </>
    );
}
export default Weather;