'use client';
import { useState } from 'react';
import styles from '../../styles/NovoSwitch.module.css';
 
export default function NovoSwitch() {
    
    const corDeFundoVermelho = styles.bg_vermelho;
    const corDeFundoAzul = styles.bg_azul;

    const [corAlterada, setCorAlterada] = useState(false);
  

    function trocar() {
    setCorAlterada(!corAlterada);
    }

    return(
        <div>
          <section className={corAlterada ? corDeFundoVermelho : corDeFundoAzul}>
          <h1>Alterando a cor da Div</h1>
          </section>  
            <section>
              <button onClick={trocar} className={styles.btn}>trocar</button>
            </section>
        </div>
    )
};