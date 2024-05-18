import React from 'react'
import style from "./homepage.module.css"

const Hero = () => {
  return (
    <div className={style.hero}>
        <div className={style.maximize}>
            <div className={style.maxiText}>
                <h1>Maximize your business with <span>us &nbsp;</span></h1>
                <p>Maximize your business with a variety of services and services from us</p>
            </div>

            <div className={style.buttons}>
                <button className={style.black}>Contact Us</button>
                <button className={style.border}>About Us</button>
            </div>
        </div>

        <div className={style.heroMan}>
            <img src="/images/img_group_665.png" alt="hero man" />
        </div>
      </div>
  )
}

export default Hero



