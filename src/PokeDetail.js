import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner';




export default class PokeDetail extends Component {
    state = {
        pokemonDetails: {},
        loading: false,
    };

    componentDidMount() {
        this.fetchPokeDetails();
    }

    fetchPokeDetails = async () => {
        this.setState({ loading: true });

        const apiId = this.props.match.params.pokeId;
        const pokemon = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex${apiId}`);
        this.setState({ pokemonDetails: pokemon.body })
        this.setState({ loading: false });
    };

    render() {
        return (
            <div>
                {this.state.loading && <Spinner />}
                {!this.state.loading && (
                    <>
                        <h2>Pokemon Details</h2>
                        <h3>{this.props.match.params.pokeId}</h3>
                        <h3>{this.state.pokemonDetails.pokemon}</h3>
                    </>
                )}
            </div>
        )
    }
}
