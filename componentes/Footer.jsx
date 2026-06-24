import '../styles/Footer.css'
import { Link } from 'wouter'
import logo from '../assets/logo.svg'

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
                        <Link href='/Catalogo/:Cocina'>Cocina</Link>
                        <Link href='/Catalogo/:Comedor'>Comedor</Link>
                        <Link href='/Catalogo/:Living'>Living</Link>
                    </div>
                    <div id='informacion'>
                        <p>Información</p>
                        <button>Locales</button>
                        <Link href='/Preguntas_frecuentes'>Preguntas frecuentes</Link>
                        <Link href='/Terminos_y_condiciones'>Terminos y condiciones</Link>
                    </div>
                    <div id='contactos'>
                        <p>Contactos</p>
                        <a href="">{/* <img src={whatsapp}/> */}+54 9 11 4455-6677</a>
                        <a href="">{/* <img src={Instagram}/> */}Instagram</a>
                        <a href="">{/* <img src={Facebook}/> */}Facebook</a>
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