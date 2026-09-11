import "../styles/Catalogo.css"
import FiltrosProd from "./FiltrosProd"
import ListadoProd from "./ListadoProd"
import {useState} from "react"

export default function Catalogo() {
  const [madera, setMadera] = useState("");

  async function cambiarMadera(madera) {
    setMadera(madera)
    console.log("MADERA SELECCIONADA:", madera)
  }
  
  return (
    <div className="catalogo">
      <FiltrosProd madera={madera} cambiarMadera={cambiarMadera}></FiltrosProd>
      <ListadoProd madera={madera}></ListadoProd>
    </div>
  )
}