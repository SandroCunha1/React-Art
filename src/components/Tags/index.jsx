import React from 'react'
import style from './Tags.module.scss'
function Tags() {
  return (
    <div className={style.tags}>
    <p>Filtre pro Tags : </p>
    <ul className={style.tags__lista}>
        <li>10x10</li>
        <li>16x15</li>
        <li>20x20</li>
        <li>20x30</li>
        <li>30x30</li>
    </ul>
    </div>
  )
}

export default Tags