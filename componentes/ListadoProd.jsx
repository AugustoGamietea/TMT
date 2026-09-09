import Tarjeta from "./Tarjeta.jsx";
import datos from "../datos.json";
import { useLocation } from "wouter";

export default function ListadoProd({ madera }) {

  const [location] = useLocation();
  const filtro = location.split("/");
  const filtroSelec = filtro[filtro.length - 1];

  const productosFiltrados = datos.productos.filter((p) => {
    
    const categoriaTodas = filtroSelec === "Catalogo" || filtroSelec === "Todas";

    const maderaTodas = madera === "" || madera === "Todas";

    const coincideCategoria = categoriaTodas || filtroSelec === p.categoria;

    const coincideMadera = maderaTodas || madera === p.material;

    return coincideCategoria && coincideMadera;
  });

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