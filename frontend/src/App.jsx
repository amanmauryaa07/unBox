import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import UserLogin from './pages/auth/UserLogin'
import Register from './pages/auth/Register'

import Nav from './component/Nav'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
      <ToastContainer />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collections />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/productdetail/:productId' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/order' element={<Order />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
