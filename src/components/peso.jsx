import React from "react";
import './atributos.css';

const Peso = props =>{
    return (

        <div className="divTableRow">
        <div className="divTableCell">Peso</div>
        <div className="divTableCell">
        
        {props.peso} lbs
        </div>
      </div>

     
    )


    
}

export default Peso
























