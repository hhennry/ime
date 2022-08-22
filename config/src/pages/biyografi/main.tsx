import React from 'react'
import ReactDOM from 'react-dom/client'
import { Biyografi } from '.'

import "../../../public/code/styles/global.css"

ReactDOM.createRoot(document.getElementById('biyografi') as HTMLElement).render(
  <React.StrictMode>
    <Biyografi />
  </React.StrictMode>
)
