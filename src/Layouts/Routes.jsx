import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import Home from '../components/Home/Home'
import { BrowserRouter as Router,Route,Routes, } from 'react-router-dom' 
import Logout from '../components/Logout/Logout'
import ProductsDetails from '../components/ProductDetails/ProductsDetails'

function RoutesLayout() {
  return (
    <>
    <Router>
<Header/>

        <Routes>
            < Route path='/' element={<Home/>}/>
            < Route path='/logout' element={<Logout/>}/>
            < Route path='/product/:id' element={<ProductsDetails/>}/>
            


        </Routes>
<Footer/>
    </Router>
    </>
  )
}

export default RoutesLayout