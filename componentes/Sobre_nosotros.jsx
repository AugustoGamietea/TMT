import '../styles/Sobre_nosotros.css'
import foto1 from '../assets/foto1-Sobre-nosotros.png'
import foto2 from '../assets/foto2-Sobre-nosotros.png'
import chavon1 from '../assets/chavon1.png'
import chavon2 from '../assets/chavon2.png'

export default function Sobre_nosotros() {
    return (
        <div id='Sob_nos'>
            <h1>Sobre nosotros</h1>
            <div id='historia'>
                <div id='historia-imagenes'>
                    <img id='Sob_nos_img1' src={foto1} />
                    <img id='Sob_nos_img2' src={foto2} />
                </div>
                <div id='historia-contenido'>
                    <h2>Nuestra historia</h2>
                    <span />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
            <span />
            <div id="equipo">
                <h2>Nuestro equipo</h2>
                <div>
                    <img src={chavon1} />
                    <img src={chavon2} />
                </div>
            </div>
        </div>
    )
}