import { createContext, useContext, useReducer } from "react";

const CarritoContext = createContext();

function carritoReducer(state, action) {
    console.log(action);
    switch (action.method) {
        case "POST":
            return [...state, action.body];
        case "DELETE":
            return state.filter(producto => { return ((producto.id != action.body.id) && (producto.color != action.body.color)) });
        case "PUT":
            return state.map(() => producto.id == action.body.id ? { ...producto, cantidad: action.body.cant } : producto);
        case "CLEAR":
            return [];
        default:
            return state;
    }
}


export function CarritoProvider({ children }) {

    const [carrito, dispatch] = useReducer(carritoReducer, []);

    function agregar(producto) {
        dispatch({
            method: "POST",
            body: producto
        })
    }

    function eliminar(id) {
        dispatch({
            method: "DELETE",
            body: { id, color }
        })
    }

    function cambiarCantidad(producto, cantidad) {
        dispatch({
            method: "PUT",
            body: {
                producto,
                cantidad
            }
        })
    }

    function limpiar() {
        dispatch({
            method: "CLEAR"
        })
    }

    return (
        <CarritoContext.Provider value={{ carrito, agregar, eliminar, limpiar, cambiarCantidad }}>
            {children}
        </CarritoContext.Provider>
    );
}

export function useCarrito() {
    return useContext(CarritoContext);
}