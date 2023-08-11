import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import Product from './pages/Product'
// import ScrollToTop from './pages/ScrollToTop'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Product />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
