import "../styles/Favoritos.css"
import mueble1 from '../assets/Mueble-1.png'
import mueble2 from '../assets/Mueble-2.png'
import mueble3 from '../assets/Mueble-3.png'
import Home from './Home'
import heart from "../assets/heart 1.png"
import { Link } from 'wouter'

export default function Favoritos() {
    return (
        <>
            <Home />
            <div className="favoritos">

                <div className="cont-fav">
                    <Link href='/' className='btn-cerrar-l'>X</Link>
                    <h2>Favoritos</h2>

                    <div className="separador-fav"></div>
                    
                    <div className="cont-tarjeta-fav">
                        <div className="tarjeta-fav">
                            <img src={mueble1}/>
                            <div className="tarjeta-fav-info">
                                <h3 className="precio-fav">$0000</h3>
                                <h3>Mesa</h3>
                                <button className="btn-agr-fav">
                                    <img src={heart}/>
                                </button>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Inventore repellendus iure, dolores optio reprehenderit 
                                    non quod earum libero obcaecati id!
                                </p>
                                
                            </div>
                        </div>

                        <div className="separador-fav"></div>

                        <div className="tarjeta-fav">
                            <img src={mueble2}/>
                            <div className="tarjeta-fav-info">
                                <h3 className="precio-fav">$0000</h3>
                                <h3>Estante para TV</h3>
                                <button className="btn-agr-fav">
                                    <img src={heart}/>
                                </button>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Inventore repellendus iure, dolores optio reprehenderit 
                                    non quod earum libero obcaecati id!
                                </p>
                            </div>
                        </div>

                        <div className="separador-fav"></div>

                        <div className="tarjeta-fav">
                            <img src={mueble3}/>
                            <div className="tarjeta-fav-info">
                                <h3 className="precio-fav">$0000</h3>
                                <h3>Sillon</h3>
                                <button className="btn-agr-fav">
                                    <img src={heart}/>
                                </button>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Inventore repellendus iure, dolores optio reprehenderit 
                                    non quod earum libero obcaecati id!
                                </p>
                            </div>
                        </div>

                        <div className="separador-fav"></div>

                        <div className="tarjeta-fav">
                            <img src={mueble1}/>
                            <div className="tarjeta-fav-info">
                                <h3 className="precio-fav">$0000</h3>
                                <h3>Mesa</h3>
                                <button className="btn-agr-fav">
                                    <img src={heart}/>
                                </button>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Inventore repellendus iure, dolores optio reprehenderit 
                                    non quod earum libero obcaecati id!
                                </p>
                                
                            </div>
                        </div>

                        <div className="separador-fav"></div>

                        <div className="tarjeta-fav">
                            <img src={mueble2}/>
                            <div className="tarjeta-fav-info">
                                <h3 className="precio-fav">$0000</h3>
                                <h3>Estante para TV</h3>
                                <button className="btn-agr-fav">
                                    <img src={heart}/>
                                </button>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Inventore repellendus iure, dolores optio reprehenderit 
                                    non quod earum libero obcaecati id!
                                </p>
                            </div>
                        </div>

                        <div className="separador-fav"></div>

                        <div className="tarjeta-fav">
                            <img src={mueble3}/>
                            <div className="tarjeta-fav-info">
                                <h3 className="precio-fav">$0000</h3>
                                <h3>Sillon</h3>
                                <button className="btn-agr-fav">
                                    <img src={heart}/>
                                </button>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Inventore repellendus iure, dolores optio reprehenderit 
                                    non quod earum libero obcaecati id!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}