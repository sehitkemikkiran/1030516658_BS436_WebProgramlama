import React from "react";
import  ReactDOM from "react-dom";
import {Game} from "./game";
import {Route, Switch} from "react-router";
import {BrowserRouter, HashRouter} from "react-router-dom";
import Home from "./home";

const notFound =()=>{
    return(
        <div>
            <h2>Sayfa Bulunamadı: 404</h2>
            <p>Hata: Aradığınız sayfaya şu an ulaşılamıyor.</p>
        </div>
    )
}

const App=()=>{
    return(
        <HashRouter>
            <Switch>
                <Route exact path='/game' component={Game} />
                <Route exact path='/' component={Home} />
                <Route component={notFound}/>
            </Switch>
        </HashRouter>
    )
}
ReactDOM.render(<App />, document.getElementById("root"));
