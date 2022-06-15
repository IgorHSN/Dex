import {useState} from 'react';
import React from 'react';
import './evolucao.css'

function Evolucao(){
    const [showElement, setShowElement] = useState(false)


    
    const showOrHide = () => setShowElement(true)
    
    return (
      <div>
        <button id = "evolucao" onClick={showOrHide}>Evolução</button>
        { showElement ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcxyBSrB6Sp2a9CG5k7hpQmHDDrJC8AZzVlh_rG-6E5KVr_H-14ndw9DIVU7zb1KfP-Y&usqp=CAU"></img>
         : null }
      </div>
    )
}

export default Evolucao;