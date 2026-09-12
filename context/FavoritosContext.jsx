import { createContext, useContext, useReducer } from "react";

const FavoritosContext = createContext();

function favoritosReducer(state, action) {
    switch (action.method) {
        case "POST":
            return state.productos.includes(action.body) ? state : {estado: state.estado, productos: [...state.productos, action.body]};
        case "DELETE":
            return {estado: state.estado, productos: state.productos.filter(producto => producto.id != action.body)}
        case "PUT":
            return {estado: action.body, productos: state.productos}
        default:
            return state;
    }
}

export function FavoritosProvider({ children }) {

    const [favoritos, dispatch] = useReducer(favoritosReducer, {estado: false, productos: []});
    
    function agregar(producto) {
        dispatch({
            method: "POST",
            body: producto
        })
    }
    
    function eliminar(id) {
        dispatch({
            method: "DELETE",
            body: id
        })
    }

    function mostrar(estado) {
        dispatch({
            method: "PUT",
            body: estado
        })
    }

    return (
        <FavoritosContext.Provider value={{ favoritos, agregar, eliminar, mostrar }}>
            {children}
        </FavoritosContext.Provider>
    );
}
    
export function useFavoritos() {
    return useContext(FavoritosContext);
}