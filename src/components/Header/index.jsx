import styles from './Header.module.scss'
import search from './search.png'
import logo from '../../../src/Logo2.png'

const Header = () => {

    return(
        <header className={styles.cabecalho}>
            <div className={styles.cabecalho__logo}>
            <img src={logo} alt="Logo Artlyn" style={{width: "100px"}} />
            <h1 className={styles.cabecalho__logo__name}>Artlyn</h1>
            </div>
            <div className={styles.cabecalho__container}>
                <input type="text" placeholder="O que você procura?" className={styles.cabecalho__input}/>
                <img src={search} alt="Search button" />
            </div>
        </header>
    )


}


export default Header