import "../styles/Tarjeta.css"
import Silla from "../assets/Silla.png"
import heart from "../assets/heart 1.png"
import { Link } from "wouter"

export default function Tarjeta( {producto} ) {

    return (
        <Link href={`/Detalle_producto/${producto.id}`} className="card">
            <button className="card-fav" type="button">
                <img src={heart} alt="Fav" />
            </button>

            <img className="mueble-img" src={Silla} alt="Mueble" />

            <div className="card-info">
                <h3>{producto.nombre}</h3>
                <span>{producto.precio}</span>
                <p>{producto.descripcion}</p>
            </div>
        </Link>
    )
}