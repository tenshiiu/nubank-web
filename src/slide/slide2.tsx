import { MdOutlineArrowOutward } from "react-icons/md";
import styles from "./slide2.module.css";

export function Slide2() {
    return (
        <section>

            <div className={styles.container}>
                <div className={styles.card}>
                    
                        <h1>Empréstimo</h1>
                        
                    <p>Transparentes, seguros e do seu jeito. Opções de empréstimos que deixam você no controle do início ao fim.</p>
                    <p><a href="#">Saiba mais <MdOutlineArrowOutward /></a></p>
                </div>
                <div className={styles.card}>
                    
                        <h1>NuConsignado</h1>
                        
                    <p>O empréstimo consignado para interesses de servidores públicos federais e para aposentados e pensionistas do INSS.</p>
                    <p><a href="#">Saiba mais <MdOutlineArrowOutward /></a></p>
                </div>
                <div className={styles.card}>
                    
                        <h1>Investimentos</h1>
                        
                    <p>Investimentos a partir de R$ 1 e opções para todos os perfis. Uma experiência fácil, segura e transparente.</p>
                    <p><a href="#">Saiba mais <MdOutlineArrowOutward /></a></p>
                </div>
                <div className={styles.card}>
                    
                        <h1>Caixinhas</h1>
                        
                    <p>Organize e guarde dinheiro para seus planos. Crie Caixinhas personalizadas para cada um de seus objetivos.</p>
                    <p><a href="#">Saiba mais <MdOutlineArrowOutward /></a></p>
                </div>
            </div>

        </section>
    )
}