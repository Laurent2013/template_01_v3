import React from 'react';
import './Backdrop.css';



/* Die Funktion sorgt daf�r das der 
 * Bildschirm dunkel wird wenn das 
 * Men� aufgerufen wird */



const Backdrop = props => (
    <div className="backdrop" onClick={props.click} />    
    );

export default Backdrop;