import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';


export class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        occupation: '',
        city: '',
        bio: ''
    }

    //Proceed to next step
    nextStep = () => {                  // Arrofunction
        const { step } = this.state;    // holt STEP aus dem state
        this.setState({                 // verändere state von STEP um eines
            step: step + 1
        });
    };

    //Go back to prev step
    prevStep = () => {                  // Arrofunction
        const { step } = this.state;    // holt STEP aus dem state
        this.setState({                 // verändere state von STEP um eines
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        // lade die Daten aus dem State
        var { step } = this.state;     // statt const hab ich hier eine globale Variable
        var { firstName, lastName, email, occupation, city, bio } = this.state;
        var values = { firstName, lastName, email, occupation, city, bio } = this.state;

        switch (step) {
            case 1:
                return (
                    /* hier wird Step1 aufgerufen aus einen anderen Datei ...
                     * inkl. funktion nextStep....
                     * inkl. aller values aus dem State... */
                    <FormUserDetails           // import!
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />   
                )
            case 2:
                return (
                    <FormPersonalDetails           // import!
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />   
                )
            case 3:
                return (
                    <Confirm                       // import!
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />  
                )
            case 4:
                return (
                    <Success                       // import!
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />  
                )

        }
    }
}

export default UserForm