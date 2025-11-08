import React from 'react'
import Awards from './Awards/Awards.jsx'
import Hero from './Hero/Hero.jsx'
import Pricing from './pricing/Pricing.jsx'
import OpenAccount from '../OpenAccount.jsx'
import Footer from '../Footer/footer.jsx'
import Stats from '../home/Stats/Stats.jsx'
import Education from './Education/education.jsx'
import Navbar from '../Navbar/navbar.jsx'

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
        </>
    )
}

export default HomePage