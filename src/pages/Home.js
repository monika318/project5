import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ProductSection from '../components/Home/ProductSection'
import AllProducts from '../components/Home/AllProducts'
import Testimonials from '../components/Home/Testimonials'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <ProductSection />
            <AllProducts />
            <Testimonials />
        </div>
    )
}

export default Home
