import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import BackgroundContextProvider from './context/BackgroundContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BackgroundContextProvider>
      <App />
    </BackgroundContextProvider>
  </React.StrictMode>,
)
