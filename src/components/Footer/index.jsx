import React from 'react'
import style from './Footer.module.scss'
import Instagram from './instagram.svg'
import Facebook from './facebook.svg'
import Twitter from './twitter.svg'
function Footer() {
  return (
    <div className={style.footer}>
        <ul className={style.footer__lista}> 
            <li><img src={Instagram} alt='Instagram'/></li>
            <li><img src={Facebook} alt='Facebook'/></li>
            <li><img src={Twitter} alt='Twitter'/></li>
        </ul>
    </div>
  ) 
}

export default Footer