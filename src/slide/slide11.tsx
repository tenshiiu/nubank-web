import { MdOutlineArrowOutward } from "react-icons/md";
import styles from "./slide11.module.css";

export function Slide11() {
    return (
        <main className={styles.container}>
            <section className={styles['container-info1']}>
                <div>
                    <h1>Nós acreditamos que só uma pessoa pode ter controle sobre sua vida financeira: você.</h1>
                </div>
                <nav><a href="">Saiba mais sobre como fazemos isso <MdOutlineArrowOutward /></a></nav>
            </section>
            <section className={styles['container-info2']}>
                <div>
                    <h1>NuCommunity
                    A comunidade oficial do Nubank para você tirar dúvidas e compartilhar ideias.</h1>
                </div>
                <nav><a href="">Faça parte <MdOutlineArrowOutward /></a></nav>
            </section>
            <section className={styles['container-info3']}>
                <div>
                    <h1>Conheça nossa central de informações em caso de emergências.</h1>
                </div>
                <nav><a href="">Conheça o SOS Nu <MdOutlineArrowOutward /></a></nav>
            </section>
        </main>
    )
}