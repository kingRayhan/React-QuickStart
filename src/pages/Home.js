import React, { Component, Fragment } from 'react'
import Layout from '../layouts'

import ReactStarter from '../components/ReactStarter'


export default class Home extends Component {

    render() {
        return (
            <Fragment>
                <Layout>
                    <ReactStarter />
                </Layout>
            </Fragment>
        )
    }
}