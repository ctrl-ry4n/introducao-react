'use client'
import { useState } from 'react'
import React from 'react';
import styles from '../styles/Topo.module.css';
import Menu from './ex5/Menu'
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";



function Topo() {

    const [menuAberto, setMenuAberto] = useState(false);
    const [alterarTema, setAlterarTema] = useState(false);

    function atualizarBotao(){
        setMenuAberto(!menuAberto);
    };

    function trocarTemaPagina(){
        setAlterarTema(!alterarTema)
    };

    return(
    <div className={alterarTema ? styles.light_mode : styles.dark_mode} >
        <header>
            <button className={styles.botaoMenu} onClick={atualizarBotao}>{menuAberto ? <AiOutlineClose/> : <VscMenu/>}</button>
            <h1>Introdução a React</h1>
            <button className={styles.alteraTema} onClick={trocarTemaPagina}>{alterarTema ? <MdOutlineDarkMode/> : <MdOutlineLightMode/>}</button>
        </header>
        {menuAberto && (<Menu/>)}
    </div>
    )
}
export default Topo;
