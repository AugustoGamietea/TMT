import '../styles/Header.css'
import logo from '../assets/logo.svg'
import flecha from '../assets/flecha.svg'
import lupa from '../assets/lupa.svg'
import whatsapp from '../assets/whatsapp.svg'
import fav from '../assets/fav.svg'
import carrito from '../assets/carrito.svg'

export default function Header() {
    return (
        <header>
            <div>
                <img id='logo' src={logo}/>
                <h1 id="titulo">TMT | Muebleria</h1>
            </div>
            <div id="submenu">
                <p className='link'>Home</p>
                <p>|</p>
                <p className='link'>Productos</p>
                <img id="flecha" src={flecha}/>
            </div>
            <nav>
                <input type="text" placeholder='¿Que estas buscando?'/>
                <img src={lupa}/>
            </nav>
            <div id="iconos">
                <img src={whatsapp}/>
                <img src={fav}/>
                <img src={carrito}/>
            </div>
        </header>
    )
}