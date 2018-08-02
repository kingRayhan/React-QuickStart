import React, { Component } from 'react'
import './index.scss'
import ReactLogo from '../../assets/images/react.png'
const ReactStarter = () =>
    <div className="react-starter-wrapper">
        <div className="react">
            <img src={ReactLogo} />
            <h1>React Starter</h1>
        </div>
    </div>

export default ReactStarter