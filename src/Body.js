import React, { Component } from 'react'
import PokeList from './PokeList'




export default class Body extends Component {
    render() {
        return (
            <main className="main-section">
                <section>
                    <PokeList />
                </section>
            </main>
        )
    }
}
