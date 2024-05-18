import React from 'react'
import style from "./homepage.module.css"

const Team = () => {
  return (
    <div className={style.team}>
      <div className={style.meet}>
        <h2>Meet our team</h2>
        <h3>View All</h3>
      </div>

      <div className={style.teamMembers}>
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
      </div>
    </div>
  )
}

export default Team
