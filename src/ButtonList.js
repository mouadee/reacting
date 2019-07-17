import React, { Component } from 'react'
import "./ButtonList.css"

class ButtonList extends Component {
    static defaultProps = {
        colors: ["#e056fd", "#ed4b4d", "#badc58", "#f0932b"]
    }
    constructor(props) {
        super(props)
        this.state = {
            color: 'burlywood'
        }
    }

    changeColor = (newColor) => {
        this.setState({ color: newColor })
    }

    render() {
        return (
            <div className='buttonList' style={{ backgroundColor: this.state.color }}>
                {this.props.colors.map(c => {
                    const colorObj = { backgroundColor: c }
                    return <button style={colorObj} onClick={this.changeColor.bind(this, c)}>Click me</button>
                })}
            </div>
        );
    }
}

export default ButtonList;