import {Router, Switch, Route} from 'wouter'
import Home from './componentes/Home'
import Header from './componentes/Header'

export default function App() {
    return (
        <Router >
            <Header />
            <Home />
        </Router>
    )
}