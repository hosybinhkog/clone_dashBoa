import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

function Routers() {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/customers" component={Customers} />
        </Switch>
    )
}

export default Routers
