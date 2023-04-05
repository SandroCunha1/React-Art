import React, { useState } from 'react'
import style from './Gallery.module.scss'
import Tags from '../Tags'
import fotos from './fotos.json'
import {AiOutlineHeart} from 'react-icons/ai'
import Cards from './Cards'


function Gallery() {
    const [itens, setItens] = useState(fotos)
    const tags = [...new Set(fotos.map((valor) => valor.tag))]

    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter((foto) => {
            return foto.tag === tag;
        })
        setItens(novasFotos);
    }
    return (
        <section className={style.galeria}>
            <h2 className={style.titulo}>
                Navegue pela galeria
            </h2>
            <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens}/>
           <Cards fotos={itens} style={style}/>
        </section>
    )
}

export default Gallery