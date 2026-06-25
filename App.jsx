import {Router, Switch, Route} from 'wouter'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Home from './componentes/Home'
import Detalle_producto from './componentes/Detalle_producto'
import Carrito from './componentes/Carrito'
import Catalogo from './componentes/Catalogo'
import Favoritos from './componentes/Favoritos'
import Locales from './componentes/Locales'
import Sobre_nosotros from './componentes/Sobre_nosotros'
import Terminos_y_condiciones from './componentes/Terminos_y_condiciones'
import Preguntas_frecuentes from './componentes/Preguntas_frecuentes'

export default function App() {
    return (
        <Router >
            <Header />
            <div className="escritorio f">
                <Favoritos />
            </div>
            <Switch>
                <Route path='/' component={Home}/>
                <Route path='/Detalle_producto' component={Detalle_producto}/>
                <Route path='/Carrito' component={Carrito}/>
                <Route path='/Catalogo/:cat' component={Catalogo}/>
                <Route path='/Catalogo' component={Catalogo}/>
                <Route path='/Favoritos' component={Favoritos}/>
                <Route path='/Sobre_nosotros' component={Sobre_nosotros}/>
                <Route path='/Terminos_y_condiciones' component={Terminos_y_condiciones}/>
                <Route path='/Preguntas_frecuentes' component={Preguntas_frecuentes} />
            </Switch>
            <Footer />
        </Router>
    )
}