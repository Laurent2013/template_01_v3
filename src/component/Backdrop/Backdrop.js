import React from 'react';
import './Backdrop.css';



/* Die Funktion sorgt dafür das der 
 * Bildschirm dunkel wird wenn das 
 * Menü aufgerufen wird */



const Backdrop = props => (
    <div className="backdrop" onClick={props.click} />    
    );

export default Backdrop;