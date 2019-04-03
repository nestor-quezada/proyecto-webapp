import React, { Component } from 'react';

  class PlusMinusInput extends Component {
    constructor (props){
        super(props);
    }

    state =  {
        count : 0 
    }
    
    incrementCount (){
        this.setState({
          count: this.state.count + 1
        });
        
        this.props.addProduct(this.props.idb, this.state.count + 1);
    }

    decrementCount (){
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            });
        } 
        this.props.removeProduct(this.props.idb, this.state.count);
    }

    render (){
        return (
          <div className="PlusMinusInput">
            <h1>{this.state.count}</h1>
            <button type="button" onClick={() => this.incrementCount()}>+</button>
            <button type="button" onClick={() => this.decrementCount()}>-</button>
          </div>
        );
      }
  }

  export default PlusMinusInput;