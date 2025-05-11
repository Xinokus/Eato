import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ErrorPage from './ErrorPage/errorPage'
import HomePage from './HomePage/homePage'
import MenuPage from './MenuPage/menuPage'
import AboutPage from './AboutUsPage/aboutPage'
import FaqPage from './FaqPage/faq'
import ContactPage from './ContactPage/contactPage'
import SpecialPage from './SpecialPage/specialPage'
import BlogPage from './BlogPage/blogPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/reservation' element={<AboutPage/>}/>
        <Route path='/events' element={<AboutPage/>}/>
        <Route path='/gallery' element={<AboutPage/>}/>
        <Route path='/reviews' element={<AboutPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/special' element={<SpecialPage/>}/>
        <Route path='/faq' element={<FaqPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
