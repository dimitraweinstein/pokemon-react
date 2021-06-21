import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner';
import './PokeItem.css';

const sleep = (x) => new Promise((res, rej) => setTimeout (() => {res() }, x))

export default class Pokedex extends Component {
    state = { 
        pokedex: [], 
        loading: false,
        query: '' ,
    }

    componentDidMount = async () => {
        await this.fetch();
    }

    handleClick = async () => {
        await this.fetch();
    }

    handleChange = async (e) => {
        this.setState({ query: e.target.value });
    }

    fetch = async () => {
        this.setState({ loading: true });
        
        if (this.state.query) {
            const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`);
            await sleep(1200)
            this.setState({ loading: false });
            this.setState({ pokedex: response.body.results });
        } else {
            const response = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex');
            await sleep(1200)
            this.setState({ loading: false });
            this.setState({ pokedex: response.body.results });
        }
    }

    render() {
        return (
            <main>
                <input onChange={this.handleChange} />
                <button onClick={this.handleClick}>Fetch!</button>
                    <div className="pokedex">
                    
                        {this.state.loading
                            ? <Spinner />
                            : this.state.pokedex.map(pokemon =>
                        <div className='poke-div'>
                            <p>{ pokemon.pokemon }</p>
                            <p>{ pokemon.type_2 }</p>
                            <p>{ pokemon.hp }</p>
                            <img src={ pokemon.url_image } alt="pokemon" />
                        </div>)}
                        
                    </div>
            </main>
        )
    }
}
