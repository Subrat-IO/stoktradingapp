import React from 'react'
import Awards from './Awards.jsx'
import Hero from './Hero.jsx'
import Pricing from './Pricing.jsx'
import OpenAccount from '../OpenAccount.jsx'
import Footer from '../footer.jsx'
import Stats from './Stats.jsx'
import Education from './education.jsx'
import Navbar from './Navbar/navbar.jsx'

function HomePage() {
    return (
        <>
        <Navbar></Navbar>
            <Hero></Hero>
            <Awards></Awards>
            <Stats></Stats>
            <Pricing></Pricing>
            <Education>
            </Education>
            <OpenAccount></OpenAccount>
            <Footer></Footer>
        </>
    )
}

export default HomePage