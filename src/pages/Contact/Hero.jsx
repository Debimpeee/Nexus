import React from 'react'
import style from "./contact.module.css"

const Hero = () => {
  return (
    <div className={style.hero}>
            <img src="/images/img_group_767.svg" alt="Phone" className={style.pinkPhone}/>        
            <div className={style.desc}>
                <div className={style.wedo}>
                    <span className={style.textBlack}>Get in&nbsp;</span>
                    <span className={style.textRed}>touch</span>
                </div>
                    <p>Stay connected with us, we will help you with your various needs. we will provide the best
                    service in technical and consulting matters. You can provide your needs or something you ask in the form below</p>
            </div>
        </div> 
  )
}

export default Hero



