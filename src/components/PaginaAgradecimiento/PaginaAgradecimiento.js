import React, { Component } from 'react';

  class PaginaAgradecimiento extends Component {
    
    render (){
        return (
          
          <div class="PaginaAgradecimiento jumbotron">
            <h1 class="display-4">Gracias por su compra  :)</h1>
            <p class="lead">Aproveche las últimas ofertas disponibles en zapatillas de marca!</p>
            <hr class="my-4"/>
            <p>Si desea seguir comprando por favor haga click en el siguiente botón</p>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="/" role="button">Seguir Comprando</a>
            </p>
          </div>
        );
      }
  }

  export default PaginaAgradecimiento;