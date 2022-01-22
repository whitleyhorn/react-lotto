import React, { Component } from 'react';
import LottoBall from './LottoBall';
import './Lotto.css';

class Lotto extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    };

    constructor(props){
        super(props);
        let nums = this.getRandNums();
        this.state = {
            nums: nums
        };

        // Bind our methods
        this.updateNums = this.updateNums.bind(this);
    }

    getRandNums(){
        let nums = [];
        while (nums.length < this.props.numBalls){
            let rand = Math.floor(Math.random() * this.props.maxNum) + 1;
            nums.push(rand);
        }
        return nums;
    }

    updateNums(){
        let nums = this.getRandNums();
        this.setState({nums: nums});
    }

    render(){
        return (
            <div className="Lotto">
                <h1 className="Lotto-title">{this.props.title}</h1>
                <div className="Lotto-balls">
                {
                    this.state.nums.map(n => {
                        return <LottoBall num={n} /> 
                    })
                }
                </div>
                <button className="Lotto-button" onClick={this.updateNums}>Generate</button>
            </div>
        );
    }
}

export default Lotto;
