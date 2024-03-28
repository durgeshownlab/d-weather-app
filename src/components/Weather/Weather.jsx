import React from 'react'
import styles from './Weather.module.css'
import Card from '../Card/Card'

const Weather = () => {
    return (
        <div className={styles.cardContainer}>
            <Card />
        </div>
    )
}

export default Weather
