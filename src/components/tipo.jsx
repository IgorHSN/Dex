import React from "react";
import './atributos.css';

const tipo = props =>{
    return (
        <div className="divTableRow">
            <div className="divTableCell">Tipo</div>

            <div className="divTableCell-tipo">{props.tipo}</div>
            
            
        </div>

              
              
    )


    
}

export default tipo