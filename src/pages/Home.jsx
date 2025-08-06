import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/Category'
import FeaturedProducts from '../components/FeaturedProducts'
import Template from '../components/Template'

function Home() {
    return (
        <>
            <Hero />
            <Category />
            <FeaturedProducts />
            <Template />
        </>
    )
}

export default Home
