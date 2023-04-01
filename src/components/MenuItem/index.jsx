import React from 'react'
import style from './MenuItem.module.scss'
import {
    AiFillHome,
    AiOutlineLike,
    AiOutlineEye,
    AiOutlinePlusCircle,
    AiOutlineBulb,
    AiOutlineHome,
    AiFillLike,
    AiFillEye,
    AiFillPlusCircle,
    AiFillBulb
} from 'react-icons/ai'

export default function MenuItem(props) {


    if (props.name == "Home") return (
        <>
            {props.isPage ?
                <li className={style.item}>
                    <AiFillHome className={style.item__imgfill} />
                    <a href="" className={style.item__linkfill}>Home</a>
                </li> :
                <li className={style.item}>
                    <AiOutlineHome className={style.item__img} />
                    <a href="">Home</a>
                </li>}
        </>
    )

    if (props.name == "Like") return (
        <>
            {props.isPage ?
                <li className={style.item}>
                    <AiFillLike className={style.item__imgfill} />
                    <a href="" className={style.item__linkfill}>Mais Curtidos</a>
                </li> :
                <li className={style.item}>
                    <AiOutlineLike className={style.item__img} />
                    <a href="">Mais Curtidos</a>
                </li>}
        </>
    )
    if (props.name == "View") return (
        <>
            {props.isPage ?
                <li className={style.item}>
                    <AiFillEye className={style.item__imgfill} />
                    <a href="" className={style.item__linkfill}>Mais Vistos</a>
                </li> :
                <li className={style.item}>
                    <AiOutlineEye className={style.item__img} />
                    <a href="">Mais Vistos</a>
                </li>}
        </>
    )
    if (props.name == "New") return (
        <>
            {props.isPage ?
                <li className={style.item}>
                    <AiFillPlusCircle className={style.item__imgfill} />
                    <a href="" className={style.item__linkfill}>Novas</a>
                </li> :
                <li className={style.item}>
                    <AiOutlinePlusCircle className={style.item__img} />
                    <a href="">Novas</a>
                </li>}
        </>
    )
    if (props.name == "Surprize") return (
        <>
            {props.isPage ?
                <li className={style.item}>
                    <AiFillBulb className={style.item__imgfill} />
                    <a href="" className={style.item__linkfill}>Like</a>
                </li> :
                <li className={style.item}>
                    <AiOutlineBulb className={style.item__img} />
                    <a href="">Like</a>
                </li>}
        </>
    )

}
