import React, { Component } from 'react';

// wurde mit npm i material-ui installiert = Bootstraps für React
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        // hier müsste ich die daten an das BACKEND weiterleiten
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        // ladet die Eingaben in eine Variable um sie hier zu verwenden
        const { values: { firstName, lastName, phone, email, occupation, city, bio } } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>


                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={ firstName }/>
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName} />
                        <ListItem
                            primaryText="Telephone"
                            secondaryText={phone} />
                        <ListItem
                            primaryText="E Mail"
                            secondaryText={ email } />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={ occupation } />
                        <ListItem
                            primaryText="City"
                            secondaryText={ city } />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={ bio } />


                    </List>

                    <br />
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue} />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back} />

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

export default Confirm;
