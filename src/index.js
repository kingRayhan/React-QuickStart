import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.css'

// Components
import App from './components/App'

const NotFound = () => <h1>404 Error</h1>

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            {/* <Route exact path="/:para" component={App} /> */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

render(<Router />, document.querySelector('#root'))