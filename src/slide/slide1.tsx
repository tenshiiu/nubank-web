import { IoArrowForwardSharp } from "react-icons/io5";
import styles from "./slide1.module.css";

export function Slide1() {
    return (
       <div className={styles.container}>

        <div className={styles['container-info']}>
            <h1>100 milhões de clientes.
                Você no centro de tudo.</h1>
            <h3>Em cada produto ou solução que lançamos, tudo é pensado para abrir N possibilidades na sua vida.</h3>
        </div>
        
        <div className={styles.card}>
           <h2>Peça sua conta e cartão de crédito Nubank</h2> 

            <label htmlFor="cpf">Digite seu CPF</label>
            <input type="text" id="cpf" placeholder="Digite aqui"/>
            <div className={styles.line}></div>
            <button><p>Continuar</p> <IoArrowForwardSharp className={styles['arrow-right']}/></button>
        </div>
      </div>
    )
}