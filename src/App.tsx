import { Routes, Route } from 'react-router-dom'
import ClientHome from './components/clientHome/ClientHome'
import Login from './components/common/logIn/Login.tsx'
import ForgotPassword from './components/common/logIn/FogotPassword.tsx'
import TripBooking from './components/clientHome/clientTicketManage/TripBooking'
import Signin from './components/clientBusOwnerServices/Reg.tsx'
import Signin_user from './components/clientUserService/UserRegistration.tsx'
import Dashboard from './components/clientBusOwnerServices/Dashboard.tsx'
import UserDashboard from './components/clientUserService/UserDashboard.tsx'
import ReviewsPage from './components/pages/review-page/ReviewsPage.tsx'
import ContactPage from './components/pages/contact/ContactPage.tsx'
import AboutPage from './components/pages/about/AboutPage.tsx'
import ServicesPage from './components/pages/services/ServicesPage.tsx'
import GalleryPage from './components/pages/gallery/GalleryPage.tsx'


function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientHome />} />
      <Route path="/book-trip" element={<TripBooking />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signin_user" element={<Signin_user />} />
      <Route path="/dashboard" element={<Dashboard />} />      
      <Route path="/UserDashboard" element={<UserDashboard />} />        
    </Routes>
  )
}

export default App
