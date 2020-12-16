import React, { Component } from 'react';

export default class Sum extends Component {
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4 >Sum</h4>
                <input className='inputLine' onChange={ (e)=>this.handleChange1(e.target.value)}></input>
                <input className='inputLine' onChange={ (e)=>this.handleChange2(e.target.value)}></input>
                <button className='confirmationButton' onClick={()=>{this.sum(this.state.number1, this.state.number2)}}></button>
                <span className="resultsBox">Sum: {JSON.stringify(this.state.sum)}</span>
            </div>
        )
    }

    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1(num) {
        this.setState({number1: Number(num)});
    }
    
    handleChange2(num) {
        this.setState({number2: Number(num)});
    }

    sum(num1, num2) {
        this.setState({sum: num1+num2})
    }

}