import React from "react";
import './atributos.css';

const Altura = props =>{
    return (

        <div className="divTableRow">
        <div className="divTableCell">Altura</div>
        <div className="divTableCell">
         {props.altura}
        </div>
      </div>


     
    )


    
}

export default Altura