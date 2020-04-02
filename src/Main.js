import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import BusinessDelivery from "./BusinessDelivery";
import Optical from "./Optical";


class Main extends Component {
    render() {
        return(
            <HashRouter>
            <div>
                <h1>Costco Sales store</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/businessDelivery">Business Delivery</NavLink></li>
                    <li><NavLink to="/optical">Optical</NavLink></li>
                    
                </ul>
                <div className="content">
                    <Route exact path = "/" component={Home}/>
                    <Route path = "/businessDelivery" component={BusinessDelivery}/>
                    <Route path = "/optical" component={Optical}/>
                    

                </div>
                </div>
            </HashRouter>  
        );
    }
}
export default Main;