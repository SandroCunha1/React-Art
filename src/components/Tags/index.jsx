import React from 'react'
import style from './Tags.module.scss'
import fotos from '../Gallery/fotos.json'
function Tags({tags, filtraFotos, setItens}) {
  console.log(tags)
  return (
    <div className={style.tags}>
    <p>Filtre pro Tags : </p>
    <ul className={style.tags__lista}>
        {
          tags.map(tag => {
            return <li key={tag} onClick={() => filtraFotos(tag)}>{tag}</li>
          })
        }
        <li onClick={() => setItens(fotos)}>Todas</li>
    </ul>
    </div>
  )
}

export default Tags