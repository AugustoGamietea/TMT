import Mueble from "../assets/MuebleDetalle.png"
import Mueble_Sec1 from "../assets/mueble-sec1.png"
import Mueble_Sec2 from "../assets/mueble-sec2.png"
import Mueble_Sec3 from "../assets/mueble-sec3.png"
import Mueble_Sec4 from "../assets/mueble-sec4.png"
import Carrito from "../assets/Carrito2.svg"
import Flecha from "../assets/flecha.svg"
import "../styles/DetalleProducto.css"
import Tarjeta from '../componentes/Tarjeta'
import datos from '../datos.json'
import { useState } from "react"
import { useLocation } from "wouter"
import { useCarrito } from "../context/CarritoContext"

export default function Detalle_producto() {
    const { carrito, agregar } = useCarrito();
    
    const [location, setLocation] = useLocation('')
    
    const producto = datos.productos[location.split('/')[location.split('/').length - 1]];

    let colorSelec = 0;
    function setColor(col, elem) {
        colorSelec = col;
        (Array.from(elem.parentElement.children)).forEach(elemChild => {
            if (elemChild != elem) {
                elemChild.style.backgroundColor = '#000'
            }
        })
    }

    var mostrarDescFlag = true;
    function mostrar(elem) {
        const desc = elem.parentElement.lastChild;
        if (mostrarDescFlag) {
            mostrarDescFlag = false;
            desc.style.display = "none";
            elem.lastChild.style.transform = "rotateZ(180deg)"
        } else {
            mostrarDescFlag = true;
            desc.style.display = "block";
            elem.lastChild.style.transform = ""
        }
    }

    const [Mueble_selec, setMueble] = useState(Mueble);
    const [cant, setCant] = useState(1);

    function cambiarMueble(elem) {
        let temp = elem.src;
        elem.src = Mueble_selec;
        setMueble(temp)
    }

    return (
        <div className="dp-container">
            <section className="detalle-producto">
                <div className="galeria">
                    <div className="img-principal">
                        <img src={Mueble_selec} alt="Mueble" />
                    </div>

                    <div className="img-secundarias">
                        <img src={Mueble_Sec1} onClick={e => cambiarMueble(e.target)} />
                        <img src={Mueble_Sec2} onClick={e => cambiarMueble(e.target)} />
                        <img src={Mueble_Sec3} onClick={e => cambiarMueble(e.target)} />
                        <img src={Mueble_Sec4} onClick={e => cambiarMueble(e.target)} />
                    </div>
                </div>

                <div className="info-producto">
                    <div className="info-item">
                        <h2>{producto.nombre}</h2>
                        <h3>${producto.precio}</h3>
                    </div>

                    <div className="descripcion">
                        <div className="info-descripcion" onClick={e => mostrar(e.currentTarget)}>
                            <h2>Descripción</h2>
                            <img src={Flecha} alt="flecha" />
                        </div>
                        <p>{producto.descripcion}</p>
                    </div>

                    <div className="info-item">
                        <h2>Color</h2>
                        <div className="colores">
                            <span className="color" style={{ backgroundColor: `#${producto.colores[0]}` }} onMouseOver={e => e.target.style.backgroundColor = `#${producto.colores[0]}`} onMouseLeave={e => { if (colorSelec != 0) { e.target.style.backgroundColor = `#000` } }} onClick={e => setColor(0, e.target)} ></span>
                            <span className="color" onMouseOver={e => e.target.style.backgroundColor = `#${producto.colores[1]}`} onMouseLeave={e => { if (colorSelec != 1) { e.target.style.backgroundColor = `#000` } }} onClick={e => setColor(1, e.target)} ></span>
                            <span className="color" onMouseOver={e => e.target.style.backgroundColor = `#${producto.colores[2]}`} onMouseLeave={e => { if (colorSelec != 2) { e.target.style.backgroundColor = `#000` } }} onClick={e => setColor(2, e.target)} ></span>
                        </div>
                    </div>

                    <div className="info-item">
                        <h2>Medidas</h2>
                        <p>{producto.medidas}</p>
                    </div>

                    {/* <div className="info-item">
                        <h2>Material</h2>
                        <img src={Flecha} alt="flecha" />
                    </div> */}

                    <div className="info-item">
                        <h2>Tipo de madera</h2>
                        {/* <img src={Flecha} alt="flecha" /> */}
                        <p>{producto.material}</p>
                    </div>

                    <div className="botones-compra">
                        <div className="cantidad">
                            <button onClick={() => { if (cant > 1) { setCant(prev => prev - 1) } }}>-</button>
                            <span>{cant}</span>
                            <button onClick={() => { if (cant < 99) { setCant(prev => prev + 1) } }}>+</button>
                        </div>
                        <button className="btn-carrito" onClick={() => {
                            if (carrito.filter(p => { return ((p.id == producto.id) && (p.color == producto.colores[colorSelec])) }).length > 0) {
                                alert('El producto ya esta en el carrito');
                                return
                            } else {
                                alert('El producto ha sido añadido al carrito');
                                agregar({ ...producto, cantidad: cant, color: producto.colores[colorSelec] });
                                setLocation('/Carrito');
                            }
                        }}>
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
                    {datos.productos.map((producto) => (
                        <Tarjeta key={producto.id} producto={producto} />
                    ))}
                </div>
            </section>
        </div>
    )
}