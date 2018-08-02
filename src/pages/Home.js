import React, { Component, Fragment } from 'react'
import Layout from '../layouts'

import ReactLogo from '../assets/images/react.png'


export default class Home extends Component {

    render() {
        return (
            <Fragment>
                <Layout>
                    <div className="react">
                        <img src={ReactLogo} />
                        <h1>Hello React</h1>
                    </div>
                </Layout>
            </Fragment>
        )
    }
}