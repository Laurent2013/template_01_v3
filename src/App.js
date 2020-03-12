import React, { Component } from 'react';
import './App.css';

import Rout from './component/rout';


import Login from './component/Sections/Login/Login';


import Toolbar from './component/Toolbar/Toolbar';
import SideDrawer from './component/SideDrawer/SideDrawer';
import Backdrop from './component/Backdrop/Backdrop';



class App extends Component {

    state = {
        sideDrawerOpen: false,
        test: 'üäö'
    };


    drawerToggleClickHandler = () => {    /* wenn es vorher offen war dann schließe es und umgekehrt */
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDraweOpen };
        });
    };

    backdropClickHandler = () => {                 /* wenn das Menü offen ist und man klickt auf das abgedunkelte passiert folgendes */
        this.setState({ sideDrawerOpen: false });  /* das Menü wird geschlossen */
    };

    onSubmit = loginData => {
        console.log("Componente haltet folgende Daten: ", loginData)
    };


    render() {

        
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }



        return (

            <div className="App">

                {/* in der Toolbar befindet sich der Button darum übergebe ich hier den ClickHandler */}
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> 

                {/* der backdrop wird als Variable übergeben das er nur erscheint wenn das Menü offen ist */}
                <SideDrawer show={this.state.sideDrawerOpen} /> 
                {backdrop}                

                <main style={{marginTop: '120px'}}>

                    <Rout />


                    <div className="section">
                        <p>Umlaute wie blkadjfla äöü {this.state.test}
                            <span> {'Ş,Ü,ö,Ç,ç'} </span></p>
                    </div>


                    {/*
                    <div className="section">
                        <Login onSubmit={loginData => this.onSubmit(loginData)} />
                    </div>
                    */}

                </main>

                
            </div>
        );
    }  
}

export default App;
