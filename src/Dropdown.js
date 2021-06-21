import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.event}>
                    <option value='' key='0'> ALL </option>
                    <option value='asc' key='1'> Ascending </option>
                    <option value='desc' key='2'> Descending </option>
                </select>
            </div>
        )
    }
}
