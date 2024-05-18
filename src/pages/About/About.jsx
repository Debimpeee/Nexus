import React from 'react'
import style from "./about.module.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Hero from "./Hero"
import Fullteam from "./Fullteam"
import Moment from "./Moment"


const index = () => {
  return (
    <div className={style.about}>
      <Header/>
      <Hero/>
      <Fullteam/>
      <Moment/>
      <Footer/>
    </div>
  )
}

export default index


































