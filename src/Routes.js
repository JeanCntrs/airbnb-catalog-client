import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Catalogue from './pages/Catalogue';
import ItemDetail from './pages/ItemDetail';
import NotFound from './pages/NotFound';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

const Routes = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/" component={Catalogue}></Route>
                    <Route exact path="/item/detail/:id" component={ItemDetail}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </Provider>
        </BrowserRouter>
    );
}

export default Routes;