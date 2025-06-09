import styles from '../styles/Card.module.css';
function Card() {
    return(
        <div className={styles.card}>
        <h3>O que são componentes?</h3>
        <p>Componentes</p>
        <p>Facilita em manter partes menores funcionando corretamente.</p>
        <p>Você pode reutilizá-lo, ou seja, menos código para se escrever.</p>
        </div>

    )
};
export default Card;