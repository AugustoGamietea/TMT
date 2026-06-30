import '../styles/Footer.css'
import { Link } from 'wouter'
import logo from '../assets/logo.svg'
import whatsapp from '../assets/whatsapp.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import '../styles/Locales.css'
import local from '../assets/local1.png'
import calle from '../assets/calle-icono.svg'
import provincia from '../assets/provincia-icono.svg'
import telefono from '../assets/telefono-icono.svg'
import maps from '../assets/maps-icono.svg'
import mail from '../assets/mail-icono.svg'

export default function Footer() {
    return (
        <footer>
            <div id='links'>
                <img id='logo' src={logo}/>
                <div>
                    <div id='paginas'>
                        <p>Páginas</p>
                        <Link href='/'>Home</Link>
                        <Link href='/Catalogo'>Productos</Link>
                        <Link href='/Sobre_nosotros'>Sobre nosotros</Link>
                    </div>
                    <div id='catalogo'>
                        <p>Categorias</p>
                        <Link href='/Catalogo/Cocina'>Cocina</Link>
                        <Link href='/Catalogo/Comedor'>Comedor</Link>
                        <Link href='/Catalogo/Living'>Living</Link>
                    </div>
                    <div id='informacion'>
                        <p>Información</p>
                        {/* <button>Locales</button> */} {/* Cuando podamos usar javascript este boton va a mostrar la vista de Locales */}
                        <details id='LocalesButt'>
                            Locales
                            <summary id='LocalesCont'>
                                <div className='cont-locales'>
                                    <div className="locales">
                                        <Link href='/' className='btn-cerrar-l'>X</Link>
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
                                            <div className="local-separador"></div>
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
                                            <div className="local-separador"></div>
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
                            </summary>
                        </details>
                        <Link href='/Preguntas_frecuentes'>Preguntas frecuentes</Link>
                        <Link href='/Terminos_y_condiciones'>Terminos y condiciones</Link>
                    </div>
                    <div id='contactos'>
                        <p>Contactos</p>
                        <a href=""><img src={whatsapp}/>+54 9 11 4455-6677</a>
                        <a href=""><img src={instagram}/>Instagram</a>
                        <a href=""><img src={facebook}/>Facebook</a>
                    </div>
                </div>
            </div>
            <span></span>
            <div>
                <p>TMT 2026 | Todos los derechos reservados</p>
                <a href="mailto:tmt@gmail.com">tmt@gmail.com</a>
            </div>
        </footer>
    )
}