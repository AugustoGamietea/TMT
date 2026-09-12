import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CarritoProvider } from './context/CarritoContext.jsx'
import { FavoritosProvider } from './context/FavoritosContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritosProvider> 
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </FavoritosProvider>
  </StrictMode>
)
