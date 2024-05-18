import React from 'react'
import style from "./about.module.css"

const Hero = () => {
  return (
    <div className={style.hero}>

        <div className={style.bothEllipse}>
            <div className={style.ellipse}>
                <div className={style.ellipseImage}>
                    <img src="/images/img_ellipse_11.png"   alt="ellipse 11" className={style.circle}/>
                </div>
                <div className={style.dot}></div>
            </div>

            <div className={style.orange}>
                <div className={style.dott}></div>
                <div className={style.ellipseImage}>
                    <img src="/images/img_ellipse_13.png"   alt="ellipse 11" className={style.circle}/>
                </div>
            </div>
        </div>
        
        <div className={style.herooo}>
            <div className={style.heroText}>
                <span className={style.black}>Get to know more&nbsp;</span>
                <span className={style.red}>about us</span>
            </div>
                <p>We are an agency engaged in the creative industry and business, we are ready to help you to improve your business performance together with our great team</p>
        </div>
        <img src="/images/img_ellipse_12.png" alt="ellipse 11" className={style.twelve}/>
    </div>

)}

export default Hero
