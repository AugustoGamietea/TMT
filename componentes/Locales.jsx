import '../styles/Locales.css'
import local from '../assets/local1.png'
import calle from '../assets/calle-icono.svg'
import provincia from '../assets/provincia-icono.svg'
import telefono from '../assets/telefono-icono.svg'
import maps from '../assets/maps-icono.svg'
import mail from '../assets/mail-icono.svg'
import Home from './Home'

export default function Locales() {
    return (
        <>
        <Home />
        <div className='cont-locales'>
            <div className="locales">
                <h2>Conoce nuestros locales</h2>
                <div className="local">
                    <img src={local} className="local-img" />
                    <div className="local-info">
                        <h3>Local 1</h3>

                        <div className="calle">
                            <img src={calle} />
                            <p>Alem</p>
                        </div>
                        <div className="provincia">
                            <img src={provincia} />
                            <p>Tierra del Fuego</p>
                        </div>
                        <div className="telefono">
                            <img src={telefono} />
                            <p>2901 234 567</p>
                        </div>
                    </div>
                    <div className="separador"></div>
                    <div className="extra">
                        <div className="maps">
                            <img src={maps} />
                            <p>Ver maps</p>
                        </div>
                        <div className="mail">
                            <img src={mail} />
                            <p>Enviar mail</p>
                        </div>
                    </div>
                </div>
                <div className="local">
                    <img src={local} className="local-img" />
                    <div className="local-info">
                        <h3>Local 2</h3>

                        <div className="calle">
                            <img src={calle} />
                            <p>Alem</p>
                        </div>
                        <div className="provincia">
                            <img src={provincia} />
                            <p>Tierra del Fuego</p>
                        </div>
                        <div className="telefono">
                            <img src={telefono} />
                            <p>2901 234 567</p>
                        </div>
                    </div>
                    <div className="separador"></div>
                    <div className="extra">
                        <div className="maps">
                            <img src={maps} />
                            <p>Ver maps</p>
                        </div>
                        <div className="mail">
                            <img src={mail} />
                            <p>Enviar mail</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}