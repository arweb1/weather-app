import React from 'react'
import './CurrentWeather.scss'
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WindPowerOutlinedIcon from '@mui/icons-material/WindPowerOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import WeatherChart from '../WeatherChart/WeatherChart';

function CurrentWeather() {
  return (
    <div className='CurrentWeather'>
        <div className="CurrentWeather__leftSide">
            <div className="CurrentWeather__leftSide-firstRow">
                <span className='city'>
                    <LocationOnOutlinedIcon/>
                    Kyiv
                </span>
                <p className='date'>Today 00:32 PM</p>
            </div>
            <div className="CurrentWeather__leftSide-secondRow">
                <p className='degrees'>14 <span>°</span></p>
                <p className="weather">Mostly Clear</p>
            </div>
            <div className="CurrentWeather__leftSide-thirdRow">
                <span>
                    <AirOutlinedIcon/>
                    720hpa
                </span>
                <span>
                    <WaterDropOutlinedIcon/>
                    32%
                </span>
                <span>
                    <WindPowerOutlinedIcon/>
                    12km/h
                </span>
            </div>
        </div>
        <div className="CurrentWeather__rightSide">
            <span>Temperature</span>
            <WeatherChart/>
        </div>
    </div>
  )
}

export default CurrentWeather