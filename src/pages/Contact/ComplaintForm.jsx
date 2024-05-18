import React, {useState} from 'react'
import style from "./contact.module.css"

const ComplaintForm = () => {

    const [complaint, setComplaint] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target

        setComplaint((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <form>
        <div className={style.messageContent}>
          <div className={style.message}>
              <h3>Send Message</h3>
              <div className={style.thinLine}></div>
          </div>

          <div className={style.namEmail}>
              <input type="name" name="name" placeholder='Your Name' className={style.name} onChange={handleChange} required/>
              <input type="email" email="email" placeholder='Your Email' className={style.email} onChange={handleChange} required/>
          </div>

          <div className={style.messageBox}>
            <textarea name="message" placeholder='Your Message' onChange={handleChange} required></textarea>          
        </div>

            <button onSubmit={handleSubmit} type='submit'>Send<img src="/images/img_save.svg" alt="send"/></button>
        </div>
    </form>
  )
}

export default ComplaintForm
