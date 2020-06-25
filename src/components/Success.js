import React, { Component } from 'react';
import MuiThemeProvider  from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
    
    continue = e =>{
        e.preventDefault();
        //Llamado a la api si hubiera
        this.props.nextStep();

    };

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
        
    };
    
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Operacion exitosa" />                   
                    <h1>Gracias por utilizar la app de Matias!</h1>
                    <p>Recibiras un mail con las instrucciones para seguir.</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button:{
        margin:15
    }
}

export default Success
