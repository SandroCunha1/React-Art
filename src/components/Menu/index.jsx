import React from 'react'
import style from './Menu.module.scss'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineLike } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineBulb } from 'react-icons/ai'
import MenuItem from '../MenuItem'

export default function Menu(props) {
  return (
    <nav className={style.menu}>

        <ul className={style.menu__lista}>         
        
            <MenuItem isPage={props.Home} name={"Home"}/>
            <MenuItem isPage={props.Like} name={"Like"}/>
            <MenuItem isPage={props.View} name={"View"}/>
            <MenuItem isPage={props.New} name={"New"}/>
            <MenuItem isPage={props.Suprize} name={"Surprize"}/>
        </ul>
    </nav>
  )
}
