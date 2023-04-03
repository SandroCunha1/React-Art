import React from 'react'
import style from './Gallery.module.scss'
import Tags from '../Tags'
import fotos from './fotos.json'
import {AiOutlineHeart} from 'react-icons/ai'
import favorito from './favorito.png'
import open from './open.png'

function Gallery() {
    return (
        <section className={style.galeria}>
            <h2 className={style.titulo}>
                Navegue pela galeria
            </h2>
            <Tags />
            <ul className={style.galeria__cards}>
                {fotos.map((foto) => {
                    return (
                        <li key={foto.id} className={style.galeria__card}>
                            <img className={style.galeria__imagem} src={foto.imagem} alt={foto.titulo} />
                            <p className={style.galeria__descricao}>{foto.titulo}</p>
                            <div>
                                <p>{foto.creditos}</p>
                                <span>
                                    <img src={favorito}alt="" />
                                    <img src={open} alt="" />
                                </span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Gallery