// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import reportWebVitals from './reportWebVitals'
import '../src/translation/i18next.config'

import Root from './Root' // nuevo componente raíz

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
)

reportWebVitals()
