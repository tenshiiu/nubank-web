import styles from "./slide7.module.css";
import CardInv from "../assets/card-inv.webp";
import { MdOutlineArrowOutward } from "react-icons/md";

export function Slide7() {
    return (
        <section className={styles.container}>
            <div className={styles.info}>
            <h1>Invista seu dinheiro</h1>    
            
            <h2>O plano é facilitar seus planos. Comece hoje com as Caixinhas do Nubank.</h2>

            <h3> <a href="#">Saiba mais <MdOutlineArrowOutward /></a> </h3>
            </div>

            <div className={styles.img}>
                <img src={CardInv} alt="" />
            </div>
        </section>
    )
}