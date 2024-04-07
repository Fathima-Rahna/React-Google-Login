import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min (9).css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <GoogleOAuthProvider clientId='721124851784-fjhh2njin4kko6v0m9urfng20m96osms.apps.googleusercontent.com'>
    <BrowserRouter><App /></BrowserRouter>
    </GoogleOAuthProvider>
   
  </React.StrictMode>,
)
