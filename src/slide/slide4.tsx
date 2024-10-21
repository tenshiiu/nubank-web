import styles from "./slide4.module.css";
import WomanCard from "../assets/woman-card.webp";
import { MdOutlineArrowOutward } from "react-icons/md";

export function Slide4() {
    return (
        <div className={styles.container}>
            <div className={styles['container-img']}>
                <img src={WomanCard} alt="" />
            </div>

            <div className={styles['container-info']}>
                <h1>Nubank Ultravioleta</h1>
                <h2>A experiência exclusiva para clientes de alta renda.</h2>
                <a href="#">Saiba mais <MdOutlineArrowOutward /></a>
            </div>
        </div>
    )
}