import "../styles/Tarjeta.css"
import Silla from "../assets/Silla.png"
import heart from "../assets/heart 1.png"
import { Link } from "wouter"

export default function Tarjeta( {productos} ) {

    console.log("PRODUCTO RECIBIDO:", productos);

    return (
        <Link href="/Detalle_producto" className="card">
            <button className="card-fav" type="button">
                <img src={heart} alt="Fav" />
            </button>

            <img className="mueble-img" src={Silla} alt="Mueble" />

            <div className="card-info">
                <h3>{productos.nombre}</h3>
                <span>{productos.precio}</span>
                <p>{productos.descripcion}</p>
            </div>
        </Link>
    )
}