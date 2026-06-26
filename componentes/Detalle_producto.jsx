import Mueble from "../assets/MuebleDetalle.png"
import Mueble_Sec1 from "../assets/mueble-sec1.png"
import Mueble_Sec2 from "../assets/mueble-sec2.png"
import Mueble_Sec3 from "../assets/mueble-sec3.png"
import Mueble_Sec4 from "../assets/mueble-sec4.png"
import Carrito from "../assets/Carrito2.svg"
import Flecha from "../assets/flecha.svg"
import "../styles/DetalleProducto.css"

export default function Detalle_producto() {
    return (
        <div className="dp-container">
            <section className="detalle-producto">
                <div className="galeria">
                    <div className="img-principal">
                        <img src={Mueble} alt="Mueble" />
                    </div>

                    <div className="img-secundarias">
                        <img src={Mueble_Sec1} alt="Mueble secundaria 1" />
                        <img src={Mueble_Sec2} alt="Mueble secundaria 2" />
                        <img src={Mueble_Sec3} alt="Mueble secundaria 3" />
                        <img src={Mueble_Sec4} alt="Mueble secundaria 4" />
                    </div>
                </div>

                <div className="info-producto">
                    <div className="info-item">
                        <h2>Nombre producto</h2>
                        <h3>$ Precio</h3>
                    </div>

                    <div className="descripcion">
                        <div className="info-descripcion">
                            <h2>Descripción</h2>
                            <img src={Flecha} alt="flecha" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>

                    <div className="info-item">
                        <h2>Color</h2>
                        <div className="colores">
                            <span className="color-activo"></span>
                            <span className="color"></span>
                            <span className="color"></span>
                        </div>
                    </div>

                    <div className="info-item">
                        <h2>Medidas</h2>
                        <img src={Flecha} alt="flecha" />
                    </div>

                    <div className="info-item">
                        <h2>Material</h2>
                        <img src={Flecha} alt="flecha" />
                    </div>

                    <div className="info-item">
                        <h2>Tipo de madera</h2>
                        <img src={Flecha} alt="flecha" />
                    </div>

                    <div className="botones-compra">
                        <div className="cantidad">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <button className="btn-carrito">
                            <img src={Carrito} alt="" />
                            Agregar carrito
                        </button>
                    </div>
                </div>
            </section>

            <section className="productos-similares">
                <div className="titulo-sim">
                    <h2>Productos similares</h2>
                    <div className="linea"></div>
                </div>

                <div className="grid-tarjetas">

                </div>
            </section>
        </div>
    )
}