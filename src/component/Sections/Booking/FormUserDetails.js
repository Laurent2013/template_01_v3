import React, { Component } from 'react';

// wurde mit npm i material-ui installiert = Bootstraps für React
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';  
import TextField from 'material-ui/TextField';  
import RaisedButton from 'material-ui/RaisedButton';  




export class FormUserDetails extends Component {

    continue = e => {                  // das ist die Funkton des Buttons
        e.preventDefault();      
        this.props.nextStep();
    }
   

    render() {
        // ladet die Values und handleChange in die props
        const { values, handleChange } = this.props; 


            



        return (
            <MuiThemeProvider>
                <React.Fragment>


                    <TextField
                        id="filled-margin-none"
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        size="small"/>
                    <br />
                    <TextField
                        id="filled-margin-none"
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        size="small"/>
                    <br />
                    <TextField
                        hintText="Enter Your Phone Nummber"
                        floatingLabelText="Telephone"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                        size="small"/>
                    <br />
                    <TextField
                        hintText="Enter Your Email adresse"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        size="small"/>
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}/>

                </React.Fragment>
            </MuiThemeProvider>
            )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;