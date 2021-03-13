import React from 'react';
import Home from './Home';
import {Switch,Route} from 'react-router-dom';
import Navbars from './Navbars';
import CartMenu from './CartMenu';

const Main = () =>
{
    return(
        <>
        <Navbars/>
        <Switch>
            <Route exact path = '/' component={Home}/>
            {/* <Route exact path = '/cart' component={CartMenu}/> */}
        </Switch>
        </>
    )
}

export default Main;