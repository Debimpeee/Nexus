import React, {useState} from 'react';
import style from "./Header.module.css";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


const Header = () => {

  const [nav, setNav] = useState(false)

  return (
      <div className={style.header}>
            <img src="/images/img_header_logo.png" alt="Header Logo" />

            <nav>
              <ul className={nav ? [style.navList, style.active].join(" ") : [style.navList]}>
                <li><a href="/">Home</a> <div className={style.dot}></div></li>
                <li><a href="about">About</a> <div className={style.dot}></div></li>
                <li><a href="works">Works</a> <div className={style.dot}></div></li>
                <li><a href="contact">Contact</a> <div className={style.dot}></div></li>
              </ul>
               <div className={style.dot}></div>
            </nav>
            <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
              {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>
      </div>
  )
}

export default Header


// import React, {useState} from 'react';
// import style from "./Header.module.css";
// import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


// const Header = () => {

//   const [nav, setNav] = useState(false)

//   return (
//     <div className={style.navbar}>
//       <div className={style.header}>
//           <div className={style.logo}>
//             <img src="/images/img_header_logo.png" alt="Header Logo" />
//           </div>

//             <nav>
//               <ul className={nav ? [style.navList, style.active].join(" ") : [style.navList]}>
//                 <li className={style.navList}><a href="/">Home</a> <div className={style.dot}></div></li>
//                 <li className={style.navList}><a href="about">About</a> <div className={style.dot}></div></li>
//                 <li className={style.navList}><a href="works">Works</a> <div className={style.dot}></div></li>
//                 <li className={style.navList}><a href="contact">Contact</a> <div className={style.dot}></div></li>
//                 <div className={style.dot}></div>
//               </ul>
//             </nav>
//             <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
//               {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
//             </div>
//       </div>
//     </div>
//   )
// }

// export default Header


