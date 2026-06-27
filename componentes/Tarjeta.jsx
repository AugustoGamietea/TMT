import "../styles/Tarjeta.css"
import Silla from "../assets/Silla.png"
import heart from "../assets/heart 1.png"

export default function Tarjeta() {
    return (
        <div className="card">
            <button className="card-fav">
                <img src={heart} alt="Fav" />
            </button>

            <img className="mueble-img" src={Silla} alt="Mueble" />

            <div className="card-info">
                <h3>Nombre de mueble</h3>
                <span>$1.500.000</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    )
}