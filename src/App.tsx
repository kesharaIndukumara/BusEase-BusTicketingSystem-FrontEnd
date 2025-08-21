import ClientHome from './components/clientHome/ClientHome'
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from './components/common/Footer'
import Header from './components/common/Header'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome/>}></Route>
        <Route path="/header" element={<Header/>}></Route>
      </Routes>
    </BrowserRouter>,
    </>
  )
}

export default App
