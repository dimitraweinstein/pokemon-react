import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import './PokeItem.css';




export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h2 className="header-title">Gotta Catch 'em All!</h2>
                <NavLink className="nav-link" exact to ="/pokedetail">
                    Pokemon Details
                </NavLink>
                <NavLink className="nav-link" exact to ="/pokedex">
                    Pokedex
                </NavLink>
                <NavLink className="nav-link" exact to ="/">
                    Home
                </NavLink>
                
            </div>
        )
    }
}
