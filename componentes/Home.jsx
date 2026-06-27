import "../styles/Home.css"
import banner from '../assets/banner.png';
import comedor from '../assets/comedor-icono.svg'
import dormitorio from '../assets/dormitorio-icono.svg' 
import cajones from '../assets/cajones-icono.svg'
import living from '../assets/living-icono.svg'
import cocina from '../assets/cocina-icono.svg' 
import oficina from '../assets/oficina-icono.svg'
import Tarjeta from "./Tarjeta";
import { Link } from 'wouter'

export default function Home(){
    return(
        <div className="Home">
            <div className="cont-banner"> 
                <img src= {banner} alt='Banner' className='banner-img'/>
                <div className="texto-banner">
                    <h1>Conoce todos nuestros muebles disponibles</h1>
                    <div className="cont-btn">
                        <Link href="/Catalogo" className='btn-product'>Ver más productos</Link>                        
                    </div>
                </div>
            </div>
            <div className="categorias">
                <h2>Categorías destacadas</h2>
                <div className="cont-cat">
                    <div className="comedor">
                        <div className="cont-icono">
                            <img src={comedor} className='icono' />
                        </div>
                        <Link href='/Catalogo/Comedor' className='btn-cat'>Comedor</Link>
                    </div>
                    <div className="dormitorio">
                        <div className="cont-icono">
                            <img src={dormitorio} className='icono' />
                        </div>
                        <Link href='/Catalogo/Dormitorio' className='btn-cat'>Dormitorio</Link>
                    </div>
                    <div className="cajones">
                        <div className="cont-icono">
                            <img src={cajones} className='icono' />
                        </div>
                        <Link href='/Catalogo/Comedor' className='btn-cat'>Cajones</Link>
                    </div>
                    <div className="living">
                        <div className="cont-icono">
                            <img src={living} className='icono'/>
                        </div>
                        <Link href='/Catalogo/Living' className='btn-cat'>Living</Link>
                    </div>
                    <div className="cocina">
                        <div className="cont-icono">
                            <img src={cocina} className='icono'/>
                        </div>
                        <Link href='/Catalogo/Cocina' className='btn-cat'>Cocina</Link>
                    </div>
                    <div className="oficina">
                        <div className="cont-icono">
                            <img src={oficina} className='icono'/>
                        </div>
                        <Link href='/Catalogo/Oficina' className='btn-cat'>Oficina</Link>
                    </div>
                </div>
               <div className="separador">
               </div>
            </div>
            <div className="product-dest">
                <h2>Productos destacados</h2>
                <div className="cont-card">
                    <Tarjeta />
                    <Tarjeta />
                    <Tarjeta />
                    <Tarjeta />
                    <Tarjeta />
                    <Tarjeta />
                    <Tarjeta />
                    <Tarjeta />
                    <Tarjeta />
                    <Tarjeta />
                </div>
            </div>
        </div>
    )
}