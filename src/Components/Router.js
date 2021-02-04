import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import MeteoApi from "./Meteo/Meteo_own_api";
import Page404 from './Error404.js';

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
            </div>  
            <Switch>
                <Route path="/meteo">
                    <MeteoApi />
                </Route>
                <Route path="/quizz">
                    <Quizz />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>  
                <Route exact component={Page404} />
            </Switch>
        </Router>
    );
}

function Quizz() {
    return (
        <h2>Quizz</h2>
    );
}

export default Rooting;