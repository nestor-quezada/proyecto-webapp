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
            }, 
            function(){
              this.props.removeProduct(this.props.idb, this.state.count) 
            });
        } 
        ;
    }

    render (){
        return (
          <div className="PlusMinusInput">
            <button type="button" className="btn btn-success" onClick={() => this.incrementCount()}>+</button>
            <h2>{this.state.count}</h2>
            <button type="button" className="btn btn-danger" onClick={() => this.decrementCount()}>-</button>
          </div>
        );
      }
  }

  export default PlusMinusInput;