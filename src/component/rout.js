import React from 'react';
import App from '../App';
import Home from './Sites/Home';

import Airporttransfer from './Sites/Airporttransfer';
import Book from './Sites/Book';
import Citytour from './Sites/Citytour';
import Citytransfer from './Sites/Citytransfer';
import Couriertransfer from './Sites/Couriertransfer';
import Roadshow from './Sites/Roadshow';
import Uber from './Sites/Uber';


import { Switch, Route } from 'react-router-dom';

const Rout = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Sites/Airporttransfer" component={Airporttransfer} />
        <Route path="/Sites/Book" component={Book} />
        <Route path="/Sites/Citytour" component={Citytour} />
        <Route path="/Sites/Citytransfer" component={Citytransfer} />
        <Route path="/Sites/Couriertransfer" component={Couriertransfer} />
        <Route path="/Sites/Roadshow" component={Roadshow} />
        <Route path="/Sites/Uber" component={Uber} />

    </Switch>
)

export default Rout;