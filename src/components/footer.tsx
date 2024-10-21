import { MdOutlineArrowOutward } from "react-icons/md";
import styles from "./footer.module.css";

export function Footer() {
    return (
        <div className={styles.container}>
            <h3>Feito por: {" "}<a href="https://github.com/tenshiiu" target="_blank">Raul Ferreira <MdOutlineArrowOutward /></a></h3>
        </div>
    )
}