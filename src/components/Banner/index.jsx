import React from 'react'
import style from './Banner.module.scss'
import banner from './banner.png'
function Banner() {
  return (
    <div className={style.imagem}>
                        <h1>A galeria mais completa</h1>
                        <img src={banner} alt="Imagem Banner Artlyn"/>
    </div>
  )
}

export default Banner