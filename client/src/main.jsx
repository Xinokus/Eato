import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ErrorPage from './ErrorPage/errorPage'
import HomePage from './HomePage/homePage'
import MenuPage from './MenuPage/menuPage'
import AboutPage from './AboutUsPage/aboutPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
