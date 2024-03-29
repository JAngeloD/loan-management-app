import React from 'react'
import * as ReactDOM from 'react-dom';
import App from './components/App'

import './scss/custom.scss' // Imports bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

// Now we can render our application into it
ReactDOM.render(<App />, document.getElementById('root'))
