import React, { Component, Fragment } from 'react'

export default class AppLayout extends Component {
    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }
}