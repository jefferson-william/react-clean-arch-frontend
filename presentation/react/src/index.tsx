/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import App from '~/module/App/components/template/App'
import * as serviceWorker from '~/module/App/utils/serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

if (process.env.NODE_ENV === 'development') {
  serviceWorker.unregister()
} else {
  serviceWorker.register()
}
