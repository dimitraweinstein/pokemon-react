import React, { Component } from 'react'
import Pokedex from './Pokedex.js';




export default class Body extends Component {
    render() {
        return (
            <main className="main-section">
                <section>
                    <Pokedex />
                </section>
            </main>
        )
    }
}
