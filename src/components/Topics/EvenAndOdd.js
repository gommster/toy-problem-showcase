import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4 >Evens and Odds</h4>
                <input className='inputLine' onChange={ (e)=>this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={()=>{this.assignEvenAndOdds(this.state.userInput)}}></button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }

    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(num) {
        this.setState({userInput: num});
    }

    assignEvenAndOdds(arr) {
        let numArray = arr.split(',').map((x)=>Number(x))
        this.setState({
            evenArray: numArray.filter((e)=>e%2 === 0),
            oddArray: numArray.filter( (e)=>e%2 === 1)
        });
    }

}