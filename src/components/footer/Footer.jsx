

import React from 'react'
import style from "./Footer.module.css"


const Footer = () => {
  return (
    <footer>
      <div className={style.footerContent}>
            <div>
                <img src="/images/img_footer_logo.png" alt="Footer Logo" className={style.footerLogo}/>
            </div>
    
        <div className={style.main}>
          <div className={style.firstSec}>
            <div className={style.footerList}>
                <p className={style.bold}>
                  <a href="About" target="_blank" rel="noreferrer">ABOUT</a>
                </p>      
                <p>
                  <a href="About" target="_blank" rel="noreferrer" className={style.small}>About</a>
                </p>
                <p>
                  <a href="About" target="_blank" rel="noreferrer" className={style.small}>What we do</a>
                </p>
                <p>
                  <a href=" Works" target="_blank" rel="noreferrer" className={style.small}>Works</a>
                </p>
                <p>
                  <a href="Contact" target="_blank" rel="noreferrer" className={style.small}>Contact</a>
                </p>
            </div>
        </div>

          <div className={style.secondSec}>
              <div className={style.footerList}>
                  <p  className={style.bold}>
                    <a href="About" target="_blank" rel="noreferrer">FOLLOW US</a>
                  </p>
                  <p>
                      <a href="Dribbble" target="_blank" rel="noreferrer" className={style.small}>Dribbble</a>
                  </p>
                  <p>
                      <a href="Instagram" target="_blank" rel="noreferrer" className={style.small}>Instagram</a>
                  </p>
                  <p>
                      <a href="Behance" target="_blank" rel="noreferrer" className={style.small}>Behance</a>
                  </p>
                  <p>
                      <a href="Pinterest" target="_blank" rel="noreferrer" className={style.small}>Pinterest</a>
                  </p>
              </div>
          </div>
        </div>
        <img src="/images/img_group_710.svg" alt="footer circle" className={style.footerImage}/> 
      </div>
      <p className={style.rights}>All Rights Reserved</p>
    </footer>
  )
}

export default Footer

