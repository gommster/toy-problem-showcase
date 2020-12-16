import React, { Component } from 'react';

export default class Palindrome extends Component {
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4 >Palindrome</h4>
                <input className='inputLine' onChange={ (e)=>this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={()=>{this.isPalindrome(this.state.userInput)}}></button>
                <span className="resultsBox">Is dat a Palindrome? {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }

    constructor() {
        super();
        this.state = {
            palindrome: '',
            userInput: ''
        }
    }

    handleChange(str) {
        this.setState({userInput: str});
    }

    isPalindrome(str) {
        let forwards = str;
        let backwards = str.split('').reverse().join('');

        if (forwards === backwards)
            this.setState({palindrome: 'TRUE - you are palindromin'})
        else  
            this.setState({palindrome: 'FALSE - that ain\'t it'})
    }

}