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
        <div className="alert alert-danger font-weight-bold alert-dismissible fade show " role="alert">
            <h6>{this.props.message}</h6>
        </div>
    );
  }
}
  export default AlertMessage;