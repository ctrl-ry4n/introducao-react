'use client';
import { useState } from 'react';
import styles from '../../styles/Switch.module.css';

function Switch(){
    const [clicarBtn, setClicarBtn] = useState(true);
    const [estadoBtn, setEstadoBtn] = useState("Ligar");

    function change(){
        
        if(clicarBtn === true){
            setClicarBtn(false);
            setEstadoBtn("Desligar");
        }
        else{
            setClicarBtn(true);
            setEstadoBtn("Ligar");
        }
    }

    let estiloDiv = clicarBtn 
    ? { backgroundColor: 'red'}
    : { backgroundColor: 'green'};

        return (
        <div className={styles.switch} style={estiloDiv}>
            <button onClick={change}>{estadoBtn}</button>          
        </div>
    )

};

export default Switch;
