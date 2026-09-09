import Tarjeta from "./Tarjeta.jsx";
import datos from "../datos.json";
import { useLocation } from "wouter";

export default function ListadoProd({ madera }) {

  const [location] = useLocation();

  const filtro = location.split("/");
  const filtroSelec = filtro[filtro.length - 1];

  let productosFiltrados;

  if (madera === "Todas" || madera == "" ) {
    productosFiltrados = datos.productos.filter(p =>
      filtroSelec === p.categoria || filtroSelec === "Catalogo"
    );
  } else {
    productosFiltrados = datos.productos.filter(p =>
      (filtroSelec === p.categoria || filtroSelec === "Catalogo") &&
      madera === p.material 
    );
  }

  return (
    <div className="Listado">
      {productosFiltrados.map((producto) => (
        <Tarjeta
          key={producto.id}
          productos={producto}
        />
      ))}
    </div>
  );
}