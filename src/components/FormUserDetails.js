import React, { Component } from 'react';
import MuiThemeProvider  from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
    
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };
    
    render() {
        const { values ,handleChange} = this.props;        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Ingrese los detalles de usuario" />
                    <TextField
                    hintText="Ingrese su nombre"
                    floatingLabelText = "Nombre"
                    onChange={handleChange('firstName')}
                    defaultValue = {values.firstName}
                     /> 
                    <br/>
                    <TextField
                    hintText="Ingrese su apellido"
                    floatingLabelText = "Apellido"
                    onChange={handleChange('lastName')}
                    defaultValue = {values.lastName}
                     /> 
                     <br/>

                     <TextField
                    hintText="Ingrese su correo electronico"
                    floatingLabelText = "Correo electronico"
                    onChange={handleChange('email')}
                    defaultValue = {values.email}
                     /> 

                     <br/>

                     <RaisedButton
                     label="Continuar"
                     primary={true}
                     style={styles.button}
                     onClick={this.continue}>


                     </RaisedButton>

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

export default FormUserDetails
