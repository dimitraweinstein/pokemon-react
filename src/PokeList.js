// import React, { Component } from 'react'
// import request from 'superagent';
// import Spinner from './Spinner.js';
// import PokeItem from './PokeItem.js';

// const sleep = (x) => new Promise((res, rej) => setTimeout (() => {res() }, x))

// export default class PokeList extends Component {
//     state = {
//         pokemon: [],
//         loading: false,
//         query: '',
//     }

//     componentDidMount = async () => {
//         await this.fetchData();
//     }

//     handleClick = async () => {
//         await this.fetchData();
//     }

//     handleChange = (e) => {
//         this.setState({ query: e.target.value });
//     }

//     fetchData = async () => {
//         this.setState({loading: true});

//         const URL = this.state.query
//             ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?search${this.state.query}`
//             : `https://pokedex-alchemy.herokuapp.com/api/pokedex`;
        
//             const data = await request.get(URL)
//             await sleep(3000)

//             this.setState({ loading: false });
//             this.setState({ pokemon: data.body});
//         } 
//     }
