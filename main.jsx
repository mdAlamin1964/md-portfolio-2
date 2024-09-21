import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './src/App'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App/>
  </HashRouter>
)
