import React from 'react'
import style from "./contact.module.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Hero from "./Hero"
import ComplaintForm from "./ComplaintForm"

const Contact = () => {

  const handleFormSubmit = (formData) =>{
    console.log('Form data:', formData);
  }
  return (
    <div className={style.contact}>
      <Header/>
      <Hero/>

      <div className={style.form}>
        <ComplaintForm/>
        <div className={style.contacts}>
              <h3>Contact Information</h3>
              <div className={style.thinLine}></div>
      
              <div className={style.eachDesc}>
                  <div className={style.each}>
                    <img src="/images/img_frame_666.svg" alt="" />
                    <h4>hello@mail.com</h4>
                  </div>
                  <div className={style.each}>
                    <img src="/images/img_globe.svg" alt="" />
                    <h4>www.abc.com </h4>
                  </div>
                  <div className={style.each}>
                    <img src="/images/img_linkedin.svg" alt="" />
                    <h4>Sudirman street, holgan, melbourne </h4>
                  </div>
                  <div className={style.each}>
                    <img src="/images/img_call.svg" alt="" />
                    <h4>1234 - 5678</h4>
                  </div>
              </div>


              <div className={style.socials}>
                  <h3>Social Media</h3>
                  <div className={style.thinLine}></div>

                  <div className={style.iconSec}>
                    <div className={style.icon}>
                        <img src="/images/img_group_270.png" alt="" />
                    </div>
                    <div className={style.icon}>
                      <img src="/images/img_group_271.png" alt="" />
                    </div>
                    <div className={style.icon}>
                      <img src="/images/img_group_268.png" alt="" />
                    </div>
                    <div className={style.icon}>
                      <img src="/images/img_group_269.png" alt="" />
                    </div>
                  </div>
              </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact

