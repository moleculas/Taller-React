import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Contacto from "./componentes/Contacto";
import Inicio from "./componentes/Inicio";
import Nosotros from "./componentes/Nosotros";
import User from "./componentes/User";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <NavLink to="/" className="btn btn-dark" activeClassName="active">
            Inicio
        </NavLink>
          <NavLink to="/nosotros" className="btn btn-dark" activeClassName="active">
            Nosotros
        </NavLink>
          <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
            Contacto
        </NavLink>
        </div>
        <hr />
        <Switch>
        <Route path="/nosotros/:id">
            <User />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
