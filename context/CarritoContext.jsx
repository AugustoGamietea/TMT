import { createContext, useContext, useReducer } from "react";

const CarritoContext = createContext();

const [carrito, dispatch] = useReducer(carritoReducer, []);

function carritoReducer(state, action) {
    switch (action.method) {
        case "POST":
            return [...state, action.body];
        case "DELETE":
            return state.filter(producto => producto.id != action.body);
        case "PUT":
            return state.map(() => producto.id == action.body.id ? {...producto, cantidad: action.body.cant} : producto);
        case "CLEAR":
            return [];
        default:
            return state;
    }
}

function agregar(producto) {
    dispatch({
        method: "",
        body: producto
    })
}

function eliminar(id) {
    dispatch({
        method: "DELETE",
        body: id
    })
}

function cambiarCantidad(producto, cantidad) {
    dispatch({
        method: "DELETE",
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

export function CarritoProvider({ children }) {
    return (
        <CarritoContext.Provider value={{ carrito, agregar, eliminar, limpiar, cambiarCantidad }}>
            {children}
        </CarritoContext.Provider>
    );
}

export function useCarrito() {
    return useContext(CarritoContext);
}

/* 
    const { carrito, agregar, eliminar, limpiar, cambiarCantidad } = useContext(CarritoContext)
    const { agregar } = useContext(CarritoContext)







*/
