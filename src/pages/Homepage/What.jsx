import React from 'react'
import style from "./homepage.module.css"

const What = () => {
  return (
    <div className={style.what}>
      <h2>What we do</h2>

      <div className={style.container}>
        <div className={style.three}>
            <img src="/images/img_clock.svg" alt="" className={style.red}/>
            <h4>UIUX Design</h4>
            <p>We can make your website or application design better with this service</p>
        </div>
        
        <div className={style.three}>
            <img src="/images/img_support_1.svg" alt="" className={style.blue}/>
            <h4>Website Dev</h4>
            <p>Make your business more leverage by having an optimal website and we are ready to help</p>
        </div>

        <div className={style.three}>
            <img src="/images/img_idea_1.svg" alt="" className={style.green
            }/>
            <h4>Branding & Product</h4>
            <p>we can also help you in the affairs of product branding so that your products can be more riveting</p>
        </div>
      </div>
    </div>
  )
}

export default What
