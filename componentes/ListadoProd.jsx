import Tarjeta from "./Tarjeta.jsx";
import datos from "../datos.json";
import { useLocation } from "wouter";

export default function ListadoProd({ madera }) {

  const [location] = useLocation();

  // Obtiene la última parte de la URL
  const filtro = location.split("/");
  const filtroSelec = filtro[filtro.length - 1];

  // Filtramos los productos
  const productosFiltrados = datos.productos.filter((p) => {

    // ¿Está seleccionada la opción "Todas" en categorías?
    const categoriaTodas =
      filtroSelec === "Catalogo" || filtroSelec === "Todas";

    // ¿Está seleccionada la opción "Todas" en maderas?
    const maderaTodas =
      madera === "" || madera === "Todas";

    // ¿Coincide la categoría?
    const coincideCategoria =
      categoriaTodas || filtroSelec === p.categoria;

    // ¿Coincide la madera?
    const coincideMadera =
      maderaTodas || madera === p.material;

    // El producto tiene que cumplir las dos condiciones
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