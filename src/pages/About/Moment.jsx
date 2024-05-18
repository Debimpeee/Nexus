import React from 'react'
import style from "./about.module.css"

const Moment = () => {
  return (
    <div className={style.moment}>
      <h2>Our Moment</h2>

      <div className={style.spread}>
        <div className={style.firstTwo}>
            <img src="/images/img_rectangle_29.png" alt="Twenty Nine" className={style.twentyNine}/>
            <img src="/images/img_rectangle_30.png" alt="Thirty" className={style.thirty}/>
        </div>
        <div className={style.secondTwo}>
            <img src="/images/img_rectangle_31.png" alt="Thirty One" className={style.thirtyOne}/>
            <img src="/images/img_mask_group.png" alt="Mask One" className={style.maskOne}/>
        </div>
        <div className={style.three}>
            <div className={style.thirdTwo}>
                <img src="/images/img_kelly_sikkema_c.png" alt="sikkema" className={style.sikkema}/>
                <img src="/images/img_woman_sitting_o.png" alt="sitting" className={style.sitting}/>
            </div>
            <img src="/images/img_mask_group_206x374.png" alt="Mask Two" className={style.maskTwo}/>
        </div>
      </div>
    </div>
  )
}

export default Moment
