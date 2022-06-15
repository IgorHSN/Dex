import {useState} from 'react';
import './evolucao.css'

function evolucao(){
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)
    
    return (
      <div>
        <button id = "evolucao" onClick={showOrHide}>Evolução</button>
        { showElement ? <img src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-down-glyph-black-icon-png-image_691473.jpg"></img> : null }
      </div>
    )
}