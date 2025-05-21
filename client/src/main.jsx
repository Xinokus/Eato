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
import EventsPage from './EventsPage/eventsPage'
import GalleryPage from './GalleryPage/galleryPage'
import ReviewPage from './ReviewPage/reviewPage'
import ReservationPage from './ReservatonPage/reservationPage'
import AdminPage from './AdminPage/adminPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/reservation' element={<ReservationPage/>}/>
        <Route path='/events' element={<EventsPage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
        <Route path='/reviews' element={<ReviewPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/special' element={<SpecialPage/>}/>
        <Route path='/faq' element={<FaqPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
