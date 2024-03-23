import React from 'react'
import ReactDOM from 'react-dom/client'
import {CardapioApp} from './cardapioApp.tsx'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CardapioApp />
  </React.StrictMode>,
)