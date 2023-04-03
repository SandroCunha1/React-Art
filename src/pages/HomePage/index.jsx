import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import style from './HomePage.module.scss'

export default function HomePage() {

    return (
        <>
            <Header />
            <main>
                <section className={style.principal}>
                    <Menu Home={true} />
                    <Banner/>
                </section>
            </main>
            <div className={style.galeria}>
                <Gallery/>
            </div>
            
            <footer>
                <Footer/>
            </footer>

        </>
    )
}