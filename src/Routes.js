import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Catalogue from './pages/Catalogue';
import ItemDetail from './pages/ItemDetail';
import NotFound from './pages/NotFound';

const Routes = () => {
    return (  
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Catalogue}></Route>
                <Route exact path="/item/detail/:id" component={ItemDetail}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    );
}
 
export default Routes;