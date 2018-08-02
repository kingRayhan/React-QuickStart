import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/sass/app.scss'

import Router from './Router'

render(<Router />, document.querySelector('#root'))