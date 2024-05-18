import React from 'react'
import style from "./works.module.css"

const Hero = () => {
  return (
    <div className={style.hero}>

        <div className={style.blueOrange}>
            <div className={style.rectangleDot}>
                <img src="/images/img_rectangle_57.svg" alt="rectangle" className={style.rectangle} />
                <div className={style.blue}></div>
            </div>

            <div className={style.orange}></div>
        </div>

        
        
        <div className={style.desc}>
            <div className={style.wedo}>
                <span className={style.blackText}>What we&nbsp;</span>
                <span className={style.redText}>do&nbsp;</span>
            </div>
                <p className={style.smallText}>We have completed many projects from various companies in the world, we have made many of our clients feel happy and satisfied with the results we have provided</p>     
        </div>

        <div className={style.triangPoly}>
            {/* <div className={style.polyOrange}> */}
                <img src="/images/img_group_776.svg" alt="polygon"  className={style.polygon}/>
            {/* </div> */}

            <div className={style.greenTriangle}>
                <div className={style.purple}></div>
                <img src="/images/img_polygon_1.svg" alt="" className={style.triangle}/>
            </div>
        </div>
        
        
      </div>
  )
}

export default Hero



