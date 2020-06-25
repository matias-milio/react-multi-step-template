import React, { Component } from 'react';
import MuiThemeProvider  from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import {List,ListItem} from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends Component {
    
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
        const {values:{firstName,lastName,email,occupation,city,bio}}  = this.props;        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirmacion - chequee sus datos" />
                   
                    <List>
                        <ListItem
                        primaryText="Nombre"
                        secondaryText = {firstName}
                        />
                        <ListItem
                        primaryText="Apellido"
                        secondaryText = {lastName}
                        />
                        <ListItem
                        primaryText="Correo electronico"
                        secondaryText = {email}
                        />
                        <ListItem
                        primaryText="Ocupacion"
                        secondaryText = {occupation}
                        />
                        <ListItem
                        primaryText="Ciudad"
                        secondaryText = {city}
                        />
                        <ListItem
                        primaryText="Bio"
                        secondaryText = {bio}
                        />
                    </List>

                     <RaisedButton
                     label="Confirmar y continuar"
                     primary={true}
                     style={styles.button}
                     onClick={this.continue}>
                     </RaisedButton>

                     <RaisedButton
                     label="Retroceder"
                     primary={false}
                     style={styles.button}
                     onClick={this.back}>


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

export default Confirm
