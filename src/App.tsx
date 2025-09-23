import { Routes, Route } from 'react-router-dom'
import ClientHome from './components/clientHome/ClientHome'
import Login from './components/common/logIn/Login.tsx'
import ForgotPassword from './components/common/logIn/FogotPassword.tsx'
import TripBooking from './components/clientHome/clientTicketManage/TripBooking'


function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientHome />} />
      <Route path="/book-trip" element={<TripBooking />} />
      <Route path="/features" element={<div>Features Page - Coming Soon</div>} />
      <Route path="/reviews" element={<div>Reviews Page - Coming Soon</div>} />
      <Route path="/contact" element={<div>Contact Page - Coming Soon</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
    </Routes>
  )
}

export default App
