import styles from "./slide5.module.css";

export function Slide5() {
    return (
        <div className={styles.container}>
            <div className={styles['container-title']}>
                <h1>Faça mais com seu cartão de crédito</h1>
            </div>

            <main className={styles['container-info']}>
                <div>
                    <h2>Pix no crédito</h2>
                    <p>Faça pagamentos PIX utilizando seu cartão de crédito. Parcele e aproveite essa vantagem.</p>
                </div>
                <div>
                    <h2>Pagamento de Boleto com cartão de crédito</h2>
                    <p>Pague seus boletos no crédito e parcele em até 12 vezes.</p>
                </div>
                <div>
                    <h2>Parcelamento de Compras</h2>
                    <p>Comprou e a loja não parcelou? O Nu parcela a compra para você! Simples e prático, direto na sua fatura.</p>
                </div>
            </main>
        </div>
    )
}