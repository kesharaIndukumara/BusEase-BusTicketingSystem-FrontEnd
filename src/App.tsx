import ClientHome from './components/clientHome/ClientHome'
import { BrowserRouter, Route, Routes } from "react-router";
import Header from './components/common/Header'
import Login from './components/common/logIn/login';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome/>}></Route>
        <Route path="/header" element={<Header/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>,
    </>
  )
}

export default App
