import React from 'react'
import style from "./works.module.css"
import Header from "../../components/header/Header"
import Hero from "./Hero"
import Footer from "../../components/footer/Footer"


const Works = () => {
  return (
    <div className={style.works}>
      <Header/>
      <Hero/>

      <div className={style.project}>
        <div className={style.latest}>
            <h3>Latest Project</h3>
            <p>this is the last variety of projects we have worked on</p>
        </div>
      </div>

        <div className={style.screens}>
            <div className={style.screenOne}>
                <div className={style.foodieText}>
                    <h4>Foodie.</h4>
                    <h3>Launching website for Apps</h3>
                    <div className={style.thinLine}></div>
                </div>

                <div className={style.foodieImage}>
                    <img src="/images/img_group_21.png" alt="Group 21" />
                </div>
            </div>


            <div className={style.screenTwo}>
                <div className={style.floopsText}>
                    <h4>Floops</h4>
                    <h3>Landing page for Website Service</h3>
                    <div className={style.thinLinee}></div>
                </div>

                <div className={style.floopsImage}>
                    <img src="/images/img_group_790.png" alt="Group 21" />
                </div>
            </div>


            <div className={style.screenThree}>
                <div className={style.InsightText}>
                    <div className={style.insightLogo}>
                        <img src="/images/img_group_51_1.png" alt="image" className={style.first}/>

                        <img src="/images/img_insight.svg" alt="insight" className={style.second}/>
                    </div>
                    <h3>Website for creative agency</h3>
                    <div className={style.thinLinee}></div>
                </div>

                <div className={style.insightImage}>

                <img src="/images/img_web_1920_2_1.png"
                    alt="web19202one" className={style.webOne}/>


                    <img src="images/img_web_1920_2_1_580x1181.png"
                    alt="web19202one" className={style.webTwo}/>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Works








