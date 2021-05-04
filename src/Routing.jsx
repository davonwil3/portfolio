import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './Portfolio';



function Routing(){



return(
<Router>
    <Switch>
        <Route path="/" exact component={Portfolio}></Route>
    </Switch>
</Router>
)
}

export default Routing;
