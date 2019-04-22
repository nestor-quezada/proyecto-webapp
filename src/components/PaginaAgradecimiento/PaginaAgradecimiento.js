import React, { Component } from 'react';

  class PaginaAgradecimiento extends Component {
    
    constructor (props){
        super(props);
    }

   
    
  

    render (){
        return (
          <div className="PaginaAgradecimiento">
            <h1>Gracias por su compra ! :)</h1>
            <a href="/"><button type="button" className="btn btn-primary font-weight-bold" >Seguir Comprando</button></a>
          </div>
        );
      }
  }

  export default PaginaAgradecimiento;