import React, { Component } from 'react';

// wurde mit npm i material-ui installiert = Bootstraps für React
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class Success extends Component {

  


    render() {
        

        return (
            <MuiThemeProvider>
                <React.Fragment>

                    <br />
                    <h1> Thank you for your submission</h1>
                    <p>You will get an email with further instructions</p>
                    
                  
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}



export default Success;
