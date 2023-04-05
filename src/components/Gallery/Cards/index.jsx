import React from 'react'
import favorito from './favorito.png'
import open from './open.png'



export default function Cards({fotos, style}) {
    return (
        <ul className={style.galeria__cards}>
            {fotos.map((foto) => {
                return (
                    <li key={foto.id} className={style.galeria__card}>
                        <img className={style.galeria__imagem} src={foto.imagem} alt={foto.titulo} />
                        <p className={style.galeria__descricao}>{foto.titulo}</p>
                        <div>
                            <p>{foto.creditos}</p>
                            <span>
                                <img src={favorito} alt="" />
                                <img src={open} alt="" />
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
