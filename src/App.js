import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import About from './pages/About/About'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import Contact from './pages/Contact/Contact'
import Checkout from './pages/Checkout/Checkout'
import Product from './pages/Product/Product'
import CartPage from './pages/CartPage/CartPage'
import ScrollToTop from './pages/ScrollToTop/ScrollToTop'
import { ShopContextProvider } from './context/ShopContext'
import SideBar from './AdminTemplate/components/SideBar'
import TopHeader from './AdminTemplate/components/TopHeader'
import AdminHome from './AdminTemplate/components/Home'
import AdminCategory from './AdminTemplate/components/Category'
import AdminProduct from './AdminTemplate/components/Products/Products'
import AdminOrder from './AdminTemplate/components/Order'
import AdminAddProduct from './AdminTemplate/components/Products/AddProduct'
import AdminAccessDenied from './AdminTemplate/components/AccessDenied/AccessDenied'
const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout101" element={<Checkout />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          <Footer />
          <SideBar />
          <TopHeader />
          <Routes>
            <Route path='/dashboard/Home' element={<AdminHome />} />
            <Route path='/dashboard/AccessDenied' element={<AdminAccessDenied />} />
            <Route path='/dashboard/Category' element={<AdminCategory />} />
            <Route path='/dashboard/Products' element={<AdminProduct />} />
            <Route path='/dashboard/add_product' element={<AdminAddProduct />} />
            <Route path='/dashboard/Order' element={<AdminOrder />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  )
}

export default App
