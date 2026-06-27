export default function FiltrosProd() {
    return (
        <div className="filtros">
            <div className="grid-filtro">
                <h2>Categorias</h2>
                <label>
                    <input type="radio" name="categoria" />
                    <span>Cocina</span>
                </label>
                <label>
                    <input type="radio" name="categoria" />
                    <span>Comedor</span>
                </label>
                <label>
                    <input type="radio" name="categoria" />
                    <span>Living</span>
                </label>
                <label>
                    <input type="radio" name="categoria" />
                    <span>Oficina</span>
                </label>
                <label>
                    <input type="radio" name="categoria" />
                    <span>Dormitorio</span>
                </label>
                <label>
                    <input type="radio" name="categoria" />
                    <span>Cajones</span>
                </label>
            </div>

            <div className="grid-filtro">
                <h2>Madera</h2>
                <label>
                    <input type="radio" name="madera" />
                    <span>Pino</span>
                </label>
                <label>
                    <input type="radio" name="madera" />
                    <span>Abedul</span>
                </label>
                <label>
                    <input type="radio" name="madera" />
                    <span>Roble</span>
                </label>
                <label>
                    <input type="radio" name="madera" />
                    <span>Cedro</span>
                </label>
                <label>
                    <input type="radio" name="madera" />
                    <span>Eucalipto</span>
                </label>
                <label>
                    <input type="radio" name="madera" />
                    <span>Nogal</span>
                </label>
                <label>
                    <input type="radio" name="madera" />
                    <span>Cerezo</span>
                </label>
                <label>
                    <input type="radio" name="madera" />
                    <span>Algarobbo</span>
                </label>
                <label>
                    <input type="radio" name="madera" />
                    <span>Fresno</span>
                </label>
            </div>
        </div>
    )
}