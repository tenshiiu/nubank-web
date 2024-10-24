import styles from "./slide6.module.css";
import Img1 from "../assets/img-slide06-1.webp";
import Img2 from "../assets/img-slide06-2.webp";
import Img3 from "../assets/img-slide06-3.webp";
import { MdOutlineArrowOutward } from "react-icons/md";

export function Slide6() {
    return (
        <div className={styles.container}>

            <div className={styles['container-title']}>
                <h1>Mais Produtos Nubank</h1>
            </div>

            <main className={styles['container-carrossel']}>
                <div className={styles['container-info-first']}>
                    <img src={Img1} alt="" />
                  <h2>Empréstimos</h2>
                  <p>Transparentes, seguros e do seu jeito: da simulação até a última parcela</p>
                  <nav className={styles.link}>
                    <a href="#">Saiba mais <MdOutlineArrowOutward /></a>
                  </nav>
                </div>
                <div className={styles['container-info-carrossel']}>
                    <img src={Img2} alt="" />
                  <h2>Seguro de vida</h2>
                  <p>Seguro para proteger você e quem você mais ama: agora e no futuro.</p>
                  <nav className={styles.link}>
                    <a href="#">Saiba mais <MdOutlineArrowOutward /></a>
                  </nav>
                </div>
                <div className={styles['container-info-carrossel']}>
                    <img src={Img3} alt="" />
                  <h2>Seguro celular</h2>
                  <p>Para você não ficar sem curtir seu celular e tudo que você pode fazer com ele.</p>
                  <nav className={styles.link}>
                    <a href="#">Saiba mais <MdOutlineArrowOutward /></a>
                  </nav>
                </div>
            </main>
        </div>
    )
}