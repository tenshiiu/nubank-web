import styles from "./slide10.module.css";

import Img1 from "../assets/slide-10-1.jpg";
import Img2 from "../assets/slide-10-2.jpg";
import Img3 from "../assets/slide-10-3.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";


export function Slide10() {
    return (
        <div className={styles.container}>
            <div className={styles['container-title']}>
                <h1>Fique por dentro das Novidades</h1>
                <a href="#">Ir para o Blog do Nu <MdOutlineArrowOutward /></a>
            </div>

            <main className={styles['container-carrossel']}>
                <div>
                    <img src={Img1} alt="" />
                        <p>Caixinhas</p>
                        <h2>Tudo o que você precisa saber sobre a ferramenta que facilita os seus planos</h2>
                        <a className={styles.link} href="#">Ler artigo <MdOutlineArrowOutward /></a>
                </div>

                <div className={styles['container-carrossel-info']}>
                    <img src={Img2} alt="" />
                        <p>Empréstimo</p>
                        <h2>Como fazer empréstimo no Nubank? Confira dicas para escolher o crédito certo para você</h2>
                        <a className={styles.link} href="#">Ler artigo <MdOutlineArrowOutward /></a>
                </div>

                <div className={styles['container-carrossel-info']}>
                    <img src={Img3} alt="" />
                        <p>N Possibilidades</p>
                        <h2>10 situações da sua vida que o Nubank te ajuda a resolver com N Possibilidades</h2>
                        <a className={styles.link} href="#">Ler artigo <MdOutlineArrowOutward /></a>
                </div>
            </main>
        </div>
    )
}