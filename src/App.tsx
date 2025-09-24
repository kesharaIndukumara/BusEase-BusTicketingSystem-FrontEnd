import { Routes, Route } from 'react-router-dom'
import ClientHome from './components/clientHome/ClientHome'
import Login from './components/common/logIn/Login.tsx'
import ForgotPassword from './components/common/logIn/FogotPassword.tsx'
import TripBooking from './components/clientHome/clientTicketManage/TripBooking'
import Signin from './components/clientBusOwnerServices/Reg.tsx'
import Signin_user from './components/clientUserService/UserRegistration.tsx'


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
      <Route path="/signin" element={<Signin />} />
      <Route path="/signin_user" element={<Signin_user />} />
    </Routes>
  )
}

export default App
