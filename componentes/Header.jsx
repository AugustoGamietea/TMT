import '../styles/Header.css'
import { Link, useLocation } from 'wouter'
import logo from '../assets/logo.svg'
import flecha from '../assets/flecha.svg'
import lupa from '../assets/lupa.svg'
import whatsapp from '../assets/whatsapp.svg'
import fav from '../assets/fav.svg'
import carrito from '../assets/carrito.svg'
import { useState } from 'react'
import datos from "../datos.json";


export default function Header() {

    const [inputbusqueda, setinputbusqueda] = useState("");

    const [, setLocation] = useLocation(); //setLocation(./Detalle_producto/:producto_id)
    let FiltroBusqueda = [];

    if (inputbusqueda !== "") {
        FiltroBusqueda = datos.productos.filter((p) => {
            return (
                p.nombre.toLowerCase().includes(inputbusqueda.toLowerCase()) ||
                p.categoria.toLowerCase().includes(inputbusqueda.toLowerCase())
            );
        });
        console.log(FiltroBusqueda)
    }

    const [mostrarSugerencias, setMostrarSugerencias] = useState(true);

    return (
        <header>
            <div id="titulo">
                <img id='logo' src={logo} />
                <h1>TMT | Muebleria</h1>
            </div>
            <div id="submenu" className='escritorio'>
                <Link href='/'>Home</Link>
                <p>|</p>
                <Link href='/Catalogo'>Productos</Link>
                <button id="flecha">
                    <img src={flecha} />
                </button>
            </div>
            <nav className='escritorio'>
                <input type="text" placeholder='¿Que estas buscando?' onChange={(e) => setinputbusqueda(e.target.value)} />
                <Link href='/Catalogo'><img src={lupa} /></Link>
                <div className='desplegable'>
                    <ul>
                        {FiltroBusqueda.map((producto) => (
                            <li className='Sugerencias' key={producto.id}>
                                <p onClick={() => { setLocation(`/Detalle_producto/${producto.id}`), setMostrarSugerencias(false), setinputbusqueda("") }} className='parrafo_desplegable'>{producto.nombre} || categoria:({producto.categoria})</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <div id="iconos">
                <div
                    onClick={() => {
                        const mensaje = `Hola, estoy interesado en un producto". ¿Podrían darme más información sobre el precio y disponibilidad?`;

                        window.open(
                            `https://wa.me/542901411740?text=${encodeURIComponent(mensaje)}`,
                            "_blank"
                        );
                    }}
                    className="icono"
                >
                    <img src={whatsapp} alt="WhatsApp" />
                </div>
                <Link href='/Favoritos' className='escritorio icono'><img src={fav} /></Link>
                <Link href='/Carrito' className="icono"><img src={carrito} /></Link>
            </div>
        </header>
    )
}