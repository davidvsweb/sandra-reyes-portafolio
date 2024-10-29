import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import { Home } from './assets/ui/components/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
