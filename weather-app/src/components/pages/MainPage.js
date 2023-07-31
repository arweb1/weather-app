import './MainPage.scss'
import HeaderApp from '../HeaderApp/HeaderApp'

import CurrentWeather from '../CurrentWeather/CurrentWeather'


const MainPage = () => {
    return(
        <>
            <div className="MainPage">
                <HeaderApp/>
                <CurrentWeather/>
            </div>
        </>
    )
}

export default MainPage