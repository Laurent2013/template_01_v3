import React from 'react';
import './SideDrawer.css';

import { Link } from 'react-router-dom';



const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'     /* wenn props.show aktiv ist dann import zwei Klassen von css */
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="../Sites/Book"> Buchen </Link></li>
                <li><Link to="../Sites/Uber"> Uber uns </Link></li>
                <li><Link to="../Sites/Airporttransfer"> Flughafentransfer </Link></li>
                <li><Link to="../Sites/Citytour"> City Tour </Link></li>
                <li><Link to="../Sites/Roadshow"> Road Show </Link></li>
                <li><Link to="../Sites/Couriertransfer"> Pakete </Link></li> 
            </ul>
        </nav>
    );
};

export default sideDrawer;