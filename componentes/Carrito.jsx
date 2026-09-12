import "../styles/Carrito.css"
import escudo from "../assets/escudo.png"
import Tarjeta from '../componentes/Tarjeta'
import datos from '../datos.json'
import { useState } from "react"
import Mueble_Sec1 from "../assets/mueble-sec1.png"

export default function Carrito() {

    const [cant, setCant] = useState({
        0: 1,
        1: 1,
        2: 1
    });

    return (
        <div className="Carrito">

            <h1>Mi carrito</h1>

            <section className="zona-carrito">

                <div className="carrito">

            
                    <div className="producto-carrito">

                        <img src={Mueble_Sec1} alt="Mesa de madera" />

                        <div className="info-producto">
                            <h3>Mesa de madera</h3>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                            </p>
                        <span>$1.500.000  ● Color elegido</span>
                        </div>

                        <div className="cantidad-carrito">

                            <button
                                onClick={() => {
                                    if (cant[0] > 1) {
                                        setCant(prev => ({
                                            ...prev,
                                            0: prev[0] - 1
                                        }))
                                    }
                                }}
                            >
                                -
                            </button>

                            <span>{cant[0]}</span>

                            <button
                                onClick={() => {
                                    if (cant[0] < 99) {
                                        setCant(prev => ({
                                            ...prev,
                                            0: prev[0] + 1
                                        }))
                                    }
                                }}
                            >
                                +
                            </button>

                        </div>

                        <strong className="precio">
                            $1.500.000 ARS
                        </strong>

                        <button className="eliminar">
                            ×
                        </button>

                    </div>


                    {/* PRODUCTO 1 */}
                    <div className="producto-carrito">

                         <img src={Mueble_Sec1} alt="Mesa de madera" />

                        <div className="info-producto">
                            <h3>Mesa de madera</h3>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                            </p>
                            <span>$1.500.000  ● Color elegido</span>
                            
                        </div>

                        <div className="cantidad-carrito">

                            <button
                                onClick={() => {
                                    if (cant[1] > 1) {
                                        setCant(prev => ({
                                            ...prev,
                                            1: prev[1] - 1
                                        }))
                                    }
                                }}
                            >
                                -
                            </button>

                            <span>{cant[1]}</span>

                            <button
                                onClick={() => {
                                    if (cant[1] < 99) {
                                        setCant(prev => ({
                                            ...prev,
                                            1: prev[1] + 1
                                        }))
                                    }
                                }}
                            >
                                +
                            </button>

                        </div>

                        <strong className="precio">
                            $1.500.000 ARS
                        </strong>

                        <button className="eliminar">
                            ×
                        </button>

                    </div>


                    <div className="producto-carrito">

                         <img src={Mueble_Sec1} alt="Mesa de madera" />

                        <div className="info-producto">
                            <h3>Mesa de madera</h3>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                            </p>
                             <span>$1.500.000  ● Color elegido</span>
                        </div>

                        <div className="cantidad-carrito">

                            <button
                                onClick={() => {
                                    if (cant[2] > 1) {
                                        setCant(prev => ({
                                            ...prev,
                                            2: prev[2] - 1
                                        }))
                                    }
                                }}
                            >-</button>

                            <span>{cant[2]}</span>

                            <button
                                onClick={() => {
                                    if (cant[2] < 99) {
                                        setCant(prev => ({
                                            ...prev,
                                            2: prev[2] + 1
                                        }))
                                    }
                                }}
                            >
                                +
                            </button>

                        </div>

                        <strong className="precio">
                            $1.500.000 ARS
                        </strong>

                        <button className="eliminar">
                            ×
                        </button>

                    </div>

                </div>


                <aside className="resumen">

                    <h2>Resumen de compra</h2>

                    <div className="linea"></div>

                    <div className="fila">
                        <span>Subtotal:</span>
                        <strong>2345</strong>
                    </div>

                    <div className="fila">
                        <span>Local:</span>
                        <strong>Dirección</strong>
                    </div>

                    <div className="fila descuento">


                        <div>
                            <input
                                type="text"
                                placeholder="Código"
                            />

                            <button>
                                Aplicar
                            </button>
                        </div>

                    </div>

                    <div className="fila">
                        <span>Descuento:</span>
                        <strong>234542</strong>
                    </div>

                    <div className="fila total">
                        <span>Total:</span>
                        <strong>24352345</strong>
                    </div>

                    <div className="garantia">

                        <img src={escudo} alt="Garantía" />

                        <p className="envio">
                            Garantía de más de 90 días contra
                            defectos de fabricación.
                        </p>

                    </div>

                    <button className="whatsapp">
                        💬 Solicitar presupuesto en WhatsApp
                    </button>

                </aside>

            </section>

            <section className="productos-similares">

                <div className="grid-tarjetas">

                    {datos.productos.map((producto) => (
                        <Tarjeta
                            key={producto.id}
                            producto={producto}
                        />
                    ))}

                </div>

            </section>

        </div>
    );
}