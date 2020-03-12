import React from 'react';

import { Link } from 'react-router-dom';


import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">

           

            {/* Das wird das Logo */}
            <div className="toolbar_logo">
                <a href="/">The Logo</a>
            </div>

            {/* Das ist der abstandhalter zw. Logo und Links */}
            <div className="spacer" />

            {/* Das wird der Menübutton 
              * beim Klick werden die props von App.js übergeben => onClick in der DrawerToggleButton.js */}
            <div className="toggleButton">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>

            {/* Das wird das Menü */}
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link to="../Sites/Book"> Buchen </Link></li>
                    <li><Link to="../Sites/Uber"> Uber uns </Link></li>
                    <li><Link to="../Sites/Airporttransfer"> Flughafentransfer </Link></li>       
                    <li><Link to="../Sites/Citytour"> City Tour </Link></li>
                    <li><Link to="../Sites/Roadshow"> Road Show </Link></li>
                    <li><Link to="../Sites/Couriertransfer"> Pakete </Link></li> 

                </ul>

            </div>
        </nav>
    </header>
);


export default toolbar;