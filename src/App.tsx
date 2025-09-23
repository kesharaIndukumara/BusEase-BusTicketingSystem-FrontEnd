import { Routes, Route } from 'react-router-dom'
import ClientHome from './components/clientHome/ClientHome'
import Login from './components/common/logIn/Login.tsx'
import ForgotPassword from './components/common/logIn/FogotPassword.tsx'


function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
    </Routes>
  )
}

export default App
