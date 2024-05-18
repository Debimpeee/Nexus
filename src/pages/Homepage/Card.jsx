import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import { sliderSettings } from './common'
import data from "./slider.json"
import style from "./homepage.module.css"

const Card = () => {
  return (
    <div className={style.card}>
        <img className={style.contrast} src="/images/img_contrast.svg" alt="" />
      
        <h2>What our clients are saying</h2>
        
      <Swiper {...sliderSettings}>
        <SliderButtons/>
        {
          data.map((card, i) => (
            <SwiperSlide key={i}>

              <div className={style.cardd}>
                  <p className={style.firstPara}>{card.description}</p>

                <div className={style.twos}>
                  <div className={style.square}>
                      <img src={card.image} alt="" />
                  </div>
                  <div className={style.nameOccu}>
                      <p>{card.name}</p>
                      <span>{card.occupation}</span>
                  </div>
                </div> 
              </div>

            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
  )
}

export default Card


const SliderButtons = () => {
  const swiper = useSwiper()
  return (
    <div className={style.arrowBtn}>
        <button onClick={() => swiper.slidePrev()}><img src="/images/img_group_683.svg" alt="" />
        </button>
        
        <button onClick={() => swiper.slideNext()}><img src="/images/img_group_684.svg" alt="" /></button>
    </div>
  )
}



