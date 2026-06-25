import "../styles/Terminos.css"
import Escudo from "../assets/escudo.svg"
import Documento from "../assets/papel.svg"
import CardInfo from "./CardInfo"

export default function Terminos() {
    return (
        <div className="terminos">
            <h1>Terminos y condiciones</h1>

            <div className="cards-info">
                <CardInfo
                   Titulo="Términos y condiciones" Icon={Escudo}
                ></CardInfo>
                <CardInfo
                    Titulo="Politicas de privacidad" Icon={Documento}
                ></CardInfo>
            </div>
        </div>
    )
}