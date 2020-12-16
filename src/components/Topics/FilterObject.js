import React, { Component } from 'react';

export default class FilterObject extends Component {
  render() {
    return (
      <div className='puzzleBox filterObjectPB'>
          <h4>Filter Object</h4>
          <span className='puzzleText'>Unfiltered Array: <br></br> {JSON.stringify(this.state.unfilteredArray)}</span>
          <input className='inputLine' onChange={(e)=>this.handleChange(e.target.value)}></input>
          <button className='confirmationButton' onClick={()=>{this.filterArray(this.state.userInput)}}></button>
          <span className='resultsBox filterObjectRB'>Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }


    constructor() {
        super();
        this.state = {
            userInput: '',
            unfilteredArray: [ 
                {nickName: 'Kenny G', age: 14}, {name: 'Kenyan Gomm', age: 28}, {name: 'Bruce Wayne'},{nickName: 'Wuce Brayne'}],
            filteredArray: []
        }
    }

    handleChange(text) {
        this.setState({userInput: text});
    }

    filterArray(str) {
        this.setState( {
            filteredArray: this.state.unfilteredArray.filter((e)=>e[str])
        })
    }
}