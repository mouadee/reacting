import React, { Component } from 'react'

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 };
    }
    singleKill = () => {
        this.setState({ score: this.state.score + 1 })
    }
    triplKil = () => {
        this.setState(curState => {
            return { score: curState.score + 3 }
        })
    }
    render() {
        return (
            <div>
                <h1>Score is: {this.state.score} </h1>
                <button onClick={this.singleKill}>Single kill</button>
                <button on onClick={this.triplKil}>Triple kill</button>
            </div>
        );
    }
}

export default ScoreKeeper;