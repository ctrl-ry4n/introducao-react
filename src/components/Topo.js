'use client'
import { useState } from 'react'
import React from 'react';
import styles from '../styles/Topo.module.css';
import Menu from './ex5/Menu'
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";

function Topo() {

    const [menuAberto, setMenuAberto] = useState(false);

    function atualizarBotao(){
        setMenuAberto(!menuAberto);
    };

    return(
    <>
        <header className={styles.topo}>
            <button className={styles.botaoMenu} onClick={atualizarBotao}>{menuAberto ? <AiOutlineClose/> : <VscMenu/>}</button>
            <h1>Introdução a React</h1>
        </header>
        {menuAberto && (<Menu/>)}
    </>
    )
}
export default Topo;
