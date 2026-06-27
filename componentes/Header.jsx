import '../styles/Header.css'
import { Link } from 'wouter'
import logo from '../assets/logo.svg'
import flecha from '../assets/flecha.svg'
import lupa from '../assets/lupa.svg'
import whatsapp from '../assets/whatsapp.svg'
import fav from '../assets/fav.svg'
import carrito from '../assets/carrito.svg'

export default function Header() {
    return (
        <header>
            <div id="titulo">
                <img id='logo' src={logo}/>
                <h1>TMT | Muebleria</h1>
            </div>
            <div id="submenu" className='escritorio'>
                <Link href='/'>Home</Link>
                <p>|</p>
                <Link href='/Catalogo'>Productos</Link>
                <button id="flecha">
                    <img src={flecha}/>
                </button>
            </div>
            <nav className='escritorio'>
                <input type="text" placeholder='¿Que estas buscando?'/>
                <Link href='/Catalogo'><img src={lupa}/></Link>
            </nav>
            <div id="iconos">
                <div className="icono"><img src={whatsapp}/></div>
                <Link href='/Favoritos' className='escritorio' className="icono"><img src={fav}/></Link>
                <Link href='/Carrito' className="icono"><img src={carrito}/></Link>
            </div>
        </header>
    )
}