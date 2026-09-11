import "../styles/Favoritos.css"
import mueble1 from '../assets/Mueble-1.png'
import mueble2 from '../assets/Mueble-2.png'
import mueble3 from '../assets/Mueble-3.png'
import heart from "../assets/heart 1.png"
import { Link } from 'wouter'
import { useFavoritos } from "../context/FavoritosContext"
import { useState } from "react"

export default function Favoritos() {
    const { favoritos, eliminar, mostrar } = useFavoritos();

    function display() {
        return (favoritos.estado ? "flex" : "none");
    }

    return (
        <div id="favoritos" style={{display: display()}}>
            <div className="cont-fav">
                <button onClick={() => mostrar(false)} className='btn-cerrar-l'>X</button>
                <h2>Favoritos</h2>
                <div className="separador-fav"></div>
                <div className="cont-tarjeta-fav">
                    {favoritos.productos.map((favProd, index) => {
                        if (index == 0) {
                            return (
                                <div className="tarjeta-fav" key={favProd.id}>
                                    <img src={favProd.imagenes[0]} />
                                    <div className="tarjeta-fav-info">
                                        <h3 className="precio-fav">${favProd.precio}</h3>
                                        <h3>{favProd.nombre}</h3>
                                        <button className="btn-agr-fav" onClick={() => {
                                            eliminar(favProd.id)
                                        }}>
                                            <img src={heart} />
                                        </button>
                                        <p>{favProd.descripcion}</p>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <>
                                    <div className="tarjeta-fav" key={favProd.id}>
                                        <img src={favProd.imagenes[0]} />
                                        <div className="tarjeta-fav-info">
                                            <h3 className="precio-fav">${favProd.precio}</h3>
                                            <h3>{favProd.nombre}</h3>
                                            <button className="btn-agr-fav" onClick={() => {
                                                eliminar(favProd.id)
                                            }}>
                                                <img src={heart} />
                                            </button>
                                            <p>{favProd.descripcion}</p>
                                        </div>
                                    </div>
                                    <div className="separador-fav"></div>
                                </>
                            )

                        }
                    })}
                </div>
            </div>
        </div>
    )
}