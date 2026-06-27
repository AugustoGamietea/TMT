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
                <Link href='/Carrito'>Productos</Link>
                <button id="flecha">
                    <img src={flecha}/>
                </button>
            </div>
            <nav className='escritorio'>
                <input type="text" placeholder='¿Que estas buscando?'/>
                <img src={lupa}/>
            </nav>
            <div id="iconos">
                <div className="icono"><img src={whatsapp}/></div>
                <div className='escritorio' className="icono"><img src={fav}/></div>
                <div className="icono"><img src={carrito}/></div>
            </div>
        </header>
    )
}