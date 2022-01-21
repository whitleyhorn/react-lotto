import React, { Component } from 'react';
import LottoBall from './LottoBall';

class Lotto extends Component {
    constructor(props){
        super(props);
        let nums = [];
        while (nums.length < props.numBalls){
            let rand = Math.floor(Math.random() * props.maxNum) + 1;
            nums.push(rand);
        }
        this.state = {nums: nums};
    }

    render(){
        const {title, numBalls, maxNum} = this.props;
        return (
            <div className="Lotto">
                <h1 className="Lotto-title">{title}</h1>
                {
                    this.state.nums.map(n => {
                        return <LottoBall num={n} />;
                    })
                }
            </div>
        );
    }
}

export default Lotto;
