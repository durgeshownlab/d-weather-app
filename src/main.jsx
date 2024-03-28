import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About/About.jsx'
import Weather from './components/Weather/Weather.jsx'

const router=createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Weather />
        },
        {
          path: '/About',
          element: <About />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
