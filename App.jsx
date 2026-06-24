import {Router, Switch, Route} from 'wouter'
import Header from './componentes/Header'
import Preguntas_frecuentes from './componentes/Preguntas_frecuentes'

export default function App() {
    return (
        <Router >
            <Header />
            <Switch>
                <Route path='/Preguntas_frecuentes' component={Preguntas_frecuentes} />
            </Switch>
        </Router>
    )
}