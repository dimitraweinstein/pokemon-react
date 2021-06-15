import React, { Component } from 'react'
import request from 'superagent';


export default class Pokedex extends Component {
    state = {
        pokedex: [],
    }

    handleFetch = async () => {
        const response = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex');

        this.setState({ pokedex: response.body.results })
    }

    render() {
        return (
            <main>
                <section className="main-section">
                    <button onClick={this.handleFetch}>Fetch!</button>
                    { this.state.pokedex.map(pokemon => <div>
                        <p>{pokemon.pokemon}</p>
                        <p>{pokemon.type_2}</p>
                        <img src={pokemon.url_image} alt="pokemon" />
                    </div>) }
                </section>
            </main>
        )
    }
}
