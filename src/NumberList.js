import React, { Component } from 'react';
import NumberItem from './NumberItem'
import "./NumberList.css"

class NumberList extends Component {
    constructor(props) {
        super(props);
        this.state = { nums: [1, 2, 3, 4, 5] };
    }
    remove = (num) => {
        if (this.state.nums.length > 0) {
            this.setState(st => ({
                nums: st.nums.filter(n => n !== num)
            }))
        } else {
            alert('nothing')
        }
    }
    render() {
        let nums = this.state.nums.map(n => <NumberItem value={n} remove={() => this.remove(n)} />)
        return (
            <div>
                <h1>Firts Number list</h1>
                <ul>
                    {nums}
                </ul>
            </div>
        );
    }
}

export default NumberList;