import styles from "./slide9.module.css";
import Woman from "../assets/slide-09-woman.webp";
import { MdOutlineArrowOutward } from "react-icons/md";

export function Slide9() {
    return (
        <section className={styles.container}>

            <div className={styles.img}>
                <img src={Woman} alt="" />
            </div>

            <div className={styles.info}>
            <h1>Shopping do Nu</h1>    
            
            <h2>Tem shopping no seu bank! Mais de 150 parceiros com ofertas para você aproveitar.</h2>

            <h3> <a href="#">Saiba mais <MdOutlineArrowOutward /></a> </h3>
            </div>

        </section>
    )
}