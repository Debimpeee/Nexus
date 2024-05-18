import React from 'react'
import Header from "../../components/header/Header"
import Hero from "./Hero"
import Team from "./Team"
import What from "./What"
import Card from "./Card"
import Footer from "../../components/footer/Footer"


const Homepage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Team/>
      <What/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Homepage
