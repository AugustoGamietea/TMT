import "../styles/Catalogo.css"
import FiltrosProd from "./FiltrosProd"
import ListadoProd from "./ListadoProd"

export default function Catalogo() {
  return (
    <div className="catalogo">
      <FiltrosProd></FiltrosProd>
      <ListadoProd></ListadoProd>
    </div>
  )
}