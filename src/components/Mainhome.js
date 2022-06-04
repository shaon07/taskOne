import React from 'react'
import Card from './Card'
import CardRound from './CardRound'
import Footer from './Footer'
import HeroSec from './HeroSec'
import Navbar from './Navbar'
import Service from './Service'
import Slider from './Slider'

const Mainhome = () => {
  return (
    <>
      <Navbar />
      <HeroSec />
      <Service />
      <Card />
      <CardRound />
      <Slider />
      <Footer />
    </>
  )
}

export default Mainhome
