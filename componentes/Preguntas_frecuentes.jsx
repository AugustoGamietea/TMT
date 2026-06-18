
import flecha from '../assets/preg_frec-flecha.svg'
import local from '../assets/local1.png'
import '../styles/Preguntas_frecuentes.css'

export default function Preguntas_frecuentes() {
    return (
        <div id='Preg_frec'>
            <div>
                <h1>Preguntas frecuentes</h1>
                <div className="pregunta abierto">
                    <p className="preg-titulo">Pregunta</p>
                    <img src={flecha} className="preg-flecha"/>
                    <div className="preg-contenido">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className="pregunta cerrado">
                    <p className="preg-titulo">Pregunta</p>
                    <img src={flecha} className="preg-flecha"/>
                </div>
                <div className="pregunta cerrado">
                    <p className="preg-titulo">Pregunta</p>
                    <img src={flecha} className="preg-flecha"/>
                </div>
                <div className="pregunta cerrado">
                    <p className="preg-titulo">Pregunta</p>
                    <img src={flecha} className="preg-flecha"/>
                </div>
                <div className="pregunta cerrado">
                    <p className="preg-titulo">Pregunta</p>
                    <img src={flecha} className="preg-flecha"/>
                </div>
                <div className="pregunta cerrado">
                    <p className="preg-titulo">Pregunta</p>
                    <img src={flecha} className="preg-flecha"/>
                </div>
                <div className="pregunta cerrado">
                    <p className="preg-titulo">Pregunta</p>
                    <img src={flecha} className="preg-flecha"/>
                </div>
            </div>
            <img src={local} id="preg_frec-local"/>
        </div>
    )
}