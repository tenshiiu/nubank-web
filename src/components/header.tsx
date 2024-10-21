import styles from "./header.module.css";

import NuLogo from "../assets/logo-nu.png";

import { MdKeyboardArrowDown } from "react-icons/md";

export function Header() {
    return (
        <div className={styles.container}>
            <div className={styles['container-img']}>
                <img src={NuLogo} alt="" className={styles.logo}/> 
            </div>

            <div>
                <a href="#" className={styles.link}>Página Inicial</a>
                <a href="#" className={styles.link}>Para você <MdKeyboardArrowDown /></a>
                <a href="#" className={styles.link}>Para seu negócio <MdKeyboardArrowDown /></a>
                <a href="#" className={styles.link}>O Nubank <MdKeyboardArrowDown /></a>
                <a href="#" className={styles.link}>Perguntas <MdKeyboardArrowDown /></a>
            </div>
        </div>
    )
}