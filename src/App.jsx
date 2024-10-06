
import './App.css'
import Header from './componets/Header'
import Footer from './componets/Footer'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import LAnding from './Pages/LAnding'
import { Routes,Route } from 'react-router-dom'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/home' element={<Home/>}/>      
      <Route path='/' element={<LAnding/>}/>      

     </Routes>

     <Footer/>
     <ToastContainer/>
    </>
  )
}

export default App
