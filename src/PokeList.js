import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner.js';
// import PokeItem from './PokeItem.js';


// const sleep = (x) => new Promise((res, rej) => setTimeout (() => {res() }, x))

export default class PokeList extends Component {
    state = {
        pokemon: [],
        loading: false,
    }

    componentDidMount = async () => {
        this.setState({loading: true});

        const data = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex')

        this.setState({ pokemon: data.body});
    }

    handleClick = async () => {
        const data = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex')
        
        this.setState({pokemon: data.body});
    }

    // handleChange = (e) => {
    //     this.setState({ query: e.target.value});
    // }

    // fetchData = async () => {
    //     this.setState({loading: true});

    //     const URL = this.state.query
    //         ?`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`
    //         :`https://pokedex-alchemy.herokuapp.com/api/pokedex`;


    //         const data = await request.get(URL)
    //         await sleep(3000)
            
    //         this.setState({loading: false});
    //         this.setState({pokemon: data.body});
    
    // }

    render(){
        return (
            <div>
                <input onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Search 'Em!</button>
                        <Spinner />
            </div>
            )
        };
        
    }
