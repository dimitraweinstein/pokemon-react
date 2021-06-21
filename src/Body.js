import React, { Component } from 'react'
import Pokedex from './Pokedex.js';
import './PokeItem.css';




export default class Body extends Component {
    render() {
        return (
            <main className="main-section">
                <section>
                    <Pokedex className='poke-section' />
                </section>
            </main>
        )
    }
}
