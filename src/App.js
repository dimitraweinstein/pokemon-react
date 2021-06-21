
import React, { Component } from 'react';
import './App.css';
import './PokeItem.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Pokedex from './Pokedex';
import PokeDetail from './PokeDetail';





class App extends Component {
  render()   {
    return (
        <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/pokedetail" component={PokeDetail} />
            <Route path="/pokedex" component={Pokedex} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
          <Footer />
        </BrowserRouter>
    );
  }
}

export default App;
