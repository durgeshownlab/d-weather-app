import React from 'react'
import styles from './Card.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faUmbrella, faLocationPin, faDove} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import weatherContext from '../../context/context'


const Card = () => {

    const {weatherData}=useContext(weatherContext)
    if(weatherData){
        console.log(weatherData)
    }

    return (
        <div className={styles.card}>
            <div className={styles.locationContainer}>
                <FontAwesomeIcon icon={faLocationDot} />
                <p className={styles.locationName}>{weatherData?weatherData.name:''}, {weatherData?weatherData.sys.country:''}</p>
            </div>

            <div className={styles.tempContainer}>
                <h1>{weatherData?Math.round(weatherData.main.temp):''}<sup>&deg;</sup><span>C</span></h1>
            </div>

            <div className={styles.skyInfoContainer}>
                <p>{weatherData?weatherData.weather[0].main:''}<br/><span></span></p>
                <img src={weatherData?`/assets/images/${weatherData.weather[0].icon}.png`:'/assets/images/weather.png'} className={styles.skyInfoImage} alt="" />
            </div>

            <div className={styles.extraInfoContainer}>
                <div className={styles.extraInfoItem}>
                    <FontAwesomeIcon icon={faUmbrella} className={styles.extraInfoIcon} />
                    <h3>{weatherData?weatherData.clouds.all:''}%</h3>
                    <p>Precipitation</p>
                </div>
                <div className={styles.extraInfoItem}>
                    <FontAwesomeIcon icon={faLocationPin} className={`${styles.extraInfoIcon} ${styles.waterDrop}`} />
                    <h3>{weatherData?weatherData.main.humidity:''}%</h3>
                    <p>Humidity</p>
                </div>
                <div className={styles.extraInfoItem}>
                    <FontAwesomeIcon icon={faDove} className={`${styles.extraInfoIcon}`} />
                    <h3>{weatherData?weatherData.wind.speed.toFixed(1):''} km/h</h3>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    )
}

export default Card
