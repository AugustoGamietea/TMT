import datos from "../datos.json"
import { useLocation } from "wouter";

export default function FiltrosProd({cambiarMadera}) {

    const [location, setLocation] = useLocation();

    const filtro = location.split("/");
    const filtroSelec = filtro[filtro.length - 1];

    
    return (
        <div className="filtros">
            <div className="grid-filtro">
                <h2>Categorias</h2>
                {datos.categoria.map((categoria) => (
                    <label key={categoria}>
                        <input type="radio" name="categoria" checked={filtroSelec == categoria} onChange={() => setLocation(`/Catalogo/${categoria}`)} />
                        <span className="filtro-span">{categoria}</span>
                    </label>
                ))}
            </div>

            <div className="grid-filtro">
                <h2>Madera</h2>
                 {datos.madera.map((madera) => (
                    <label key={madera}>
                        <input type="radio" name="madera" value={madera} onChange={(e) => cambiarMadera(e.target.value)} />
                        <span className="filtro-span">{madera}</span>
                    </label>
                ))}
            </div>

        </div>
    )
}