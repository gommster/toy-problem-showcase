import React, { Component } from 'react';

export default class FilterString extends Component {
  render() {
    return(
        <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'>Unfiltered Array: <br></br> {JSON.stringify(this.state.unfilteredArray)}</span>
        <input className='inputLine' onChange={(e)=>this.handleChange(e.target.value)}></input>
        <button className='confirmationButton' onClick={()=>{this.filterArray(this.state.userInput)}}></button>
        <span className='resultsBox filterStringRB'>Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>
        </div>
    )
}


constructor() {
  super();
  this.state = {
      userInput: '',
      unfilteredArray: ['yo', 'yoma', 'yoyo','yoyoma','yoyomama'],
      filteredArray: []
  }
}

handleChange(text) {
  this.setState({userInput: text});
}

filterArray(str) {
  this.setState( {
      filteredArray: this.state.unfilteredArray.filter((e)=>e.includes(str))
  })
}
}