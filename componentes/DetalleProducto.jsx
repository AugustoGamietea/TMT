import Mueble from "../assets/MuebleDetalle.png"
import "../styles/DetalleProducto.css"

export default function DetalleProducto() {
    return (
        <div>
            <section className="Detalleproducto">
                <div className="galeria">
                    <div className="img-principal">
                        <img src={Mueble} alt="Mueble" />
                    </div>

                    <div className="img-secundarias">
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>

                <div>

                </div>
            </section>

            <section>
                <div className="">
                    <h2>Productos similares</h2>
                </div>

                <div className="grid-tarjetas">

                </div>
            </section>
        </div>
    )
}