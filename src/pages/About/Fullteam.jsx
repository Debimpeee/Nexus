import React from 'react'
import style from "./about.module.css"

const Fullteam = () => {
  return (
      <div className={style.fullTeam}>
        <div className={style.member}>
            <img src="/images/img_rectangle_16.png" alt="" />
               <div className={style.textArea}>
                    <h4>Sarah Jae</h4>
                    <p>Branding Specialist</p>
                </div>
            </div>
        <div className={style.member}>
            <img src="/images/img_rectangle_15.png" alt="" />
                <div className={style.textArea}>
                    <h4>John Doe</h4>
                    <p>Product Designer</p>
                </div>
        </div>
        <div className={style.member}>
            <img src="/images/img_rectangle_17.png" alt="" />
                <div className={style.textArea}>
                    <h4>Samantha</h4>
                    <p>SEO Specialist</p>
                </div>
        </div>
        <div className={style.member}>
            <img src="/images/img_rectangle_18.png" alt="" />
               <div className={style.textArea}>
                    <h4>Lila laconsia</h4>
                    <p>UI Designer</p>
                </div>
            </div>
        <div className={style.member}>
            <img src="/images/img_rectangle_19.png" alt="" />
                <div className={style.textArea}>
                    <h4>John Doe</h4>
                    <p>Product Designer</p>
                </div>
        </div>
        <div className={style.member}>
            <img src="/images/img_rectangle_20.png" alt="" />
                <div className={style.textArea}>
                    <h4>Ana louren</h4>
                    <p>Illustrator</p>
                </div>
        </div>
        <div className={style.member}>
            <img src="/images/img_rectangle_21.png" alt="" />
               <div className={style.textArea}>
                    <h4>Randy okla</h4>
                    <p>Interaction Designer</p>
                </div>
            </div>
        <div className={style.member}>
            <img src="/images/img_rectangle_22.png" alt="" />
                <div className={style.textArea}>
                    <h4>Sinta Marcus</h4>
                    <p>UX Writer</p>
                </div>
        </div>
        <div className={style.member}>
            <img src="/images/img_rectangle_23.png" alt="" />
                <div className={style.textArea}>
                    <h4>Sam Rivald</h4>
                    <p>Front-end Dev</p>
                </div>
        </div>
      </div>
  )
}

export default Fullteam

