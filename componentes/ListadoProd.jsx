import Tarjeta from "./Tarjeta"
import datos from "../datos.json"
import { useLocation } from "wouter";

export default function ListadoProd () {
    const [location, ] = useLocation();

    const filtro = location.split("/");
    const filtroSelec = filtro[filtro.length - 1];
    
    return (
        <div className="Listado">
            {datos.productos.filter(p => {if (filtroSelec == p.categoria || filtroSelec == "Catalogo") {return true}}).map((producto) => (
                <Tarjeta key={producto.categoria} producto={producto}></Tarjeta>
            ))}
        </div>
    )
}