import React from 'react'
import ReactDOM from 'react-dom'

import Parse from 'parse'

import App from './app'

Parse.initialize('f917188e6ef56273821b797ad09eae91a35d8a97', 'ad0f86b417246751414e2235427c36300f675b97')
Parse.serverURL='http://52.14.179.101:80/parse/'

ReactDOM.render(<App />, document.getElementById('root'))