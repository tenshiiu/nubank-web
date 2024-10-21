import styles from "./slide3.module.css";
import CardSlide from "../assets/card-slide.webp";

import { MdOutlineArrowOutward } from "react-icons/md";

export function Slide3() {
    return (
        <section className={styles.container}>
            <div className={styles.info}>
            <h1>Conheça nosso Cartão de Crédito</h1>    
            
            <h2>Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno, gratuito e prático também.</h2>

            <h3> <a href="#">Saiba mais <MdOutlineArrowOutward /></a> </h3>
            </div>

            <div className={styles.img}>
                <img src={CardSlide} alt="" />
            </div>
        </section>
    )
}