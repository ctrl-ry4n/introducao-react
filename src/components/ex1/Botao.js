'use client';
import { useState } from 'react';

function Botao (){
    
    const [mensagem, setMensagem] =useState('Clique no botão para alterar a mensagem');

        function alterarMensagem(){
            setMensagem('A mensagem foi alterada!');
        }
    return (
        <div>
            <p>{mensagem}</p>
            <br></br>
            <button onClick={alterarMensagem}>Clique para alterar</button>
        </div>
    )


}

export default Botao;