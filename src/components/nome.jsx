import React from "react";
import './atributos.css';

const nome = props =>{
    return (

        <div className="divTableRow">
        <div className="divTableCell">Nome</div>
        <div className="divTableCell">
         {props.nome}
        </div>
      </div>
    )

}

export default nome;