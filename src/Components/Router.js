import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import MeteoApi from "./Meteo/Meteo_own_api";

function Rooting() {
    return (
        <Router>
            <div className="navbar_header">
                <nav>
                    <ul className="navbar">
                        <li className="bulletpoint">
                            <Link to="/">Accueil</Link>
                        </li>
                        <li className="bulletpoint">
                            <Link to="/meteo">Météo</Link>
                        </li>
                        <li className="bulletpoint">
                            <Link to="/quizz">Quizz</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/meteo">
                        <MeteoApi />
                    </Route>
                    <Route path="/quizz">
                        <Quizz />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Quizz() {
    return (
        <h2>Quizz</h2>
    );
}

export default Rooting;