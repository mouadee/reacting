import React, { Component } from 'react'
import "./NumberList.css"

class NumberItem extends Component {
    constructor(props) {
        super(props)
        this.handlRemove = this.handlRemove.bind(this)
    }

    handlRemove = (evt) => {
        this.props.remove(this.props.value)
    }

    render() {
        return (
            <li>
                {this.props.value}
                <button onClick={this.handlRemove}>x</button>
            </li>
        );
    }
}

export default NumberItem;