import '../css/Header.css'
import {useState} from 'react'

function Header() {
    const [paragrafoHeader, setState] = useState("Parágrafo do Header")

    return(
        <header>
            <h1>Título do Header</h1>
            <p>{paragrafoHeader}</p>
            <button onClick={() => setState("✨Parágrafo do Header✨")}>Muda</button>
        </header>
    )
}

export default Header