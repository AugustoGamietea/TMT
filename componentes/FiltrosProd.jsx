import datos from "../datos.json"

export default function FiltrosProd() {

    console.log(datos);
    return (
        <div className="filtros">
            <div className="grid-filtro">
                <h2>Categorias</h2>
                {datos.categoria.map((categoria) => (
                    <label key={categoria}>
                        <input type="radio" name="categoria" />
                        <span className="filtro-span">{categoria}</span>
                    </label>
                ))}
            </div>

            <div className="grid-filtro">
                <h2>Madera</h2>
                 {datos.madera.map((madera) => (
                    <label key={madera}>
                        <input type="radio" name="madera" />
                        <span className="filtro-span">{madera}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}