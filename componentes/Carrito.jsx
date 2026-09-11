import "../styles/Carrito.css"

export default function Carrito() {
    return (
        <div className="Carrito">

            <h1>Mi carrito</h1>

            <section className="zona-carrito">

                <div className="carrito">

                    <div className="producto-carrito">

                        <img src="mesa.jpg" alt="Mesa de madera" />

                        <div className="info-producto">
                            <h3>Mesa de madera</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <span>$1.500.000</span>
                            <small>● Color elegido</small>
                        </div>

                        <div className="cantidad-carrito">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>

                        <strong className="precio">
                            $1.500.000 ARS
                        </strong>

                        <button className="eliminar">
                            ×
                        </button>

                    </div>


                    <div className="producto-carrito">

                        <img src="mesa.jpg" alt="Mesa de madera" />

                        <div className="info-producto">
                            <h3>Mesa de madera</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <span>$1.500.000</span>
                            <small>● Color elegido</small>
                        </div>

                        <div className="cantidad-carrito">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>

                        <strong className="precio">
                            $1.500.000 ARS
                        </strong>

                        <button className="eliminar">
                            ×
                        </button>

                    </div>


                    <div className="producto-carrito">

                        <img src="mesa.jpg" alt="Mesa de madera" />

                        <div className="info-producto">
                            <h3>Mesa de madera</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <span>$1.500.000</span>
                            <small>● Color elegido</small>
                        </div>

                        <div className="cantidad-carrito">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
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
                        <strong>$ Precio</strong>
                    </div>

                    <div className="fila">
                        <span>Local:</span>
                        <strong>Dirección</strong>
                    </div>

                    <div className="fila descuento">

                        <span>Cupón de descuento:</span>

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
                        <strong>$ Precio</strong>
                    </div>

                    <div className="fila total">
                        <span>Total:</span>
                        <strong>$ Precio</strong>
                    </div>

                    <p className="envio">
                        🛻 Garantía de más de 90 días contra defectos de fabricación.
                    </p>

                    <button className="whatsapp">
                        💬 Solicitar presupuesto en WhatsApp
                    </button>

                </aside>

            </section>

        </div>
    );
}