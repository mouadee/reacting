import React, { Component } from 'react'
import "./NumberList.css"

class NumberItem extends Component {
    render() {
        return (
            <li>
                {this.props.value}
                <button onClick={this.props.remove}>x</button>
            </li>
        );
    }
}

export default NumberItem;