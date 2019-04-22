import React, { Component } from 'react';

  class PlusMinusInput extends Component {
    
    constructor (props){
        super(props);
        if(props.cantidad){
          this.state.count = props.cantidad;
        }
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
          <div className="PlusMinusInput row">
            <button type="button" className="btn font-weight-bold" onClick={() => this.incrementCount()}>+</button>
            <h2>{this.state.count}</h2>
            <button type="button" className="btn font-weight-bold" onClick={() => this.decrementCount()}>-</button>
          </div>
        );
      }
  }

  export default PlusMinusInput;