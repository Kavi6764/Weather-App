import'./Weather.css';
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'
import { useState } from 'react';
export default function WeatherApp(){

let api_key="7cc5491e3bf8537bb92081b35ed8f2a5";
const search= async ()=> {
  const element=document.getElementsByClassName("cityname")
  if(element[0].value=="")
  {
    return 0;
  }
  {
  
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`;
    let response=  await fetch(url)
    let data= await response.json();
    const humidity=document.getElementsByClassName('humidity-percent')
    const wind=document.getElementsByClassName('wind-rate')
    const temprature=document.getElementsByClassName('weather-temp')
    const location=document.getElementsByClassName("weather-location")
    
    humidity[0].innerHTML=Math.floor(data.main.humidity) +"%";
    wind[0].innerHTML= Math.floor( data.wind.speed) +"km/h";
    temprature[0].innerHTML=Math.floor(data.main.temp )+"°C";
    location[0].innerHTML=data.name;

    //  if(data.weather[0].icon==='01d'|| data.weather[0].icon === 'o1n') 
    //  {
    //           setWicon(clear_icon)
    //  }else if(data.weather[0].icon==='02d'|| data.weather[0].icon === 'o2n') 
    //  {
    //     setWicon(cloud_icon)
    //  }
    //  else if(data.weather[0].icon==='03d'|| data.weather[0].icon === 'o3n') 
    //  {
    //     setWicon(drizzle_icon)
    //  }
    //  else if(data.weather[0].icon==='04d'|| data.weather[0].icon === 'o4n') 
    //  {
    //     setWicon(drizzle_icon)
    //  }
    //  else if(data.weather[0].icon==='09d'|| data.weather[0].icon === 'o9n') 
    //  {
    //     setWicon(rain_icon)
    //  }
    //  else if(data.weather[0].icon==='10d'|| data.weather[0].icon === '10n') 
    //  {
    //     setWicon(rain_icon)
    //  }
    //  else if(data.weather[0].icon==='13d'|| data.weather[0].icon === '13n') 
    //  {
    //     setWicon(snow_icon)
    //  }
    //  else
    //  {
    //     setWicon(clear_icon)
    //  }
  
  }
}
    return(
        <div className='container'>
            <div className='tob-bar'>
                <input type='text' placeholder='Search' className='cityname' />
                <div className='search-icon' onClick={()=>{search()}}> 
                <img src={search_icon} alt=''/>
                </div>
             </div>
             <div className="weather-image">
                <img src= {clear_icon}/>
             </div>
             <div className='weather-temp'>20°C</div>
             <div className='weather-location'> London</div>
           <div className='data-container'>
                <div className='element'>
                      <img src={humidity_icon} alt='' className='icon'></img>
                     <div className='data'>
                         <div className='humidity-percent'>64%</div>
                         <div className='text'>humidity</div>
                    </div>
                </div> 
                <div className='element'>
                      <img src={wind_icon} alt='' className='icon'></img>
                     <div className='data'>
                         <div className='wind-rate'>18 km/h</div>
                         <div className='text'>WindSpeed</div>
                    </div>
                </div> 
                
           </div>
           



        </div>
    )
}