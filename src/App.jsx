import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from './components/Footer/Footer'

import axios from 'axios'
import weatherContext from './context/context'


function App() {

  const [weatherData, setWeatherData]=useState(undefined);
  const [inputField, setInputField]=useState('delhi')

  useEffect(()=>{
    
    axios.get(`${import.meta.env.VITE_API_URL}/?q=${inputField}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
    .then((res)=>{
        // console.log(res.data);
        setWeatherData(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })

  }, [inputField])



  return (
    <>
      <weatherContext.Provider value={{inputField, setInputField, weatherData, setWeatherData}}>
        <Header />
        <Outlet />
        <Footer />
      </weatherContext.Provider>
    </>
  )
}

export default App
