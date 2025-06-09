'use client';
import { useState } from 'react';
import styles from '../../styles/NovoSwitch.module.css';
 
export default function NovoSwitch() {
    
    const corDeFundoVermelho = styles.bg_vermelho;
    const corDeFundoAzul = styles.bg_azul;

    const [corAlterada, setCorAlterada] = useState(false);
    const [corFundo, setCorFundo] = useState(styles.padrao);

    function trocar() {
      if(corAlterada === true) {
        setCorAlterada(false);
      setCorFundo(corDeFundoVermelho);
    } else {
    setCorAlterada(true);
      setCorFundo(corDeFundoAzul);
    }


    }

    return(
        <div className={corFundo}>
            <h1>Alterando a cor da Div</h1>
            <button onClick={trocar} className={styles.btn}>trocar</button>
        </div>

    )
};