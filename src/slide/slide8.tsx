import styles from "./slide8.module.css";
import Light from "../assets/slide-07-light.webp";
import Dark from "../assets/slide-07-dark.webp";
import { MdOutlineArrowOutward } from "react-icons/md";

export function Slide8() {
    return (
        <main className={styles.container}>
            <div className={styles['container-light']}>
                <img src={Light} alt="" />
                <h1>Conta do Nubank</h1>
                <h3>Manter suas contas em dia nunca foi tão simples com Assistente de Pagamentos.</h3>
                <a href="#">Saiba mais <MdOutlineArrowOutward /></a>
            </div>
            <div className={styles['container-dark']}>
                <img src={Dark} alt="" />
                <h1>Conta PJ</h1>
                <h3>Ficou mais fácil organizar o seu negócio com a conta PJ do Nubank</h3>
                <a href="#">Saiba mais <MdOutlineArrowOutward /></a>
            </div>
        </main>
    )
}