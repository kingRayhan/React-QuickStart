import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/blog/:postId" component={SingleBlog} />
            <Route exact path="/contact" component={Contact} /> */}
        </Switch>
    </BrowserRouter>
)

export default Router