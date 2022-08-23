import {useState} from 'react'
import img from '../img/imagem.jpg'
import '../css/Corpo.css'
import CaixaTeste from './CaixaTeste'


function Corpo() {
    var [paragrafoCorpo, setState] = useState("Esse parágrafo está definido em 'Corpo.js'!")

    return(
        <main>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi ut beatae amet sequi magni dolorem adipisci neque ipsam. Magni consequuntur iusto ea quod est mollitia? Officiis tempore minus praesentium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi ut beatae amet sequi magni dolorem adipisci neque ipsam. Magni consequuntur iusto ea quod est mollitia? Officiis tempore minus praesentium.</p>
            <div className="divImagem">
                <img src={img} alt={"Imagem"} className="imagem"/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi ut beatae amet sequi magni dolorem adipisci neque ipsam. Magni consequuntur iusto ea quod est mollitia? Officiis tempore minus praesentium.</p>
            <p>{paragrafoCorpo}</p>
            <button onClick={() => setState("Mudou!")}>Muda</button>
            <section>
                <CaixaTeste paragrafoCorpo={paragrafoCorpo}/>
            </section>
        </main>
    )
}

export default Corpo