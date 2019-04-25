import React, { Component } from 'react';

class AlertMessage extends Component    {

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.show !== this.props.show){
            window.scrollTo(0, 0);
        }
    }

  render (){

    if (!this.props.show) {
      return null;
    }
        
    return (
        <div class="alert alert-danger font-weight-bold alert-dismissible fade show " role="alert">
            <bold>No hay ningún elemento en el carrito.</bold>
        </div>
    );
  }
}
  export default AlertMessage;