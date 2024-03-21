import React from 'react'
import ReactDOM from 'react-dom/client'
import {Context as ResponsiveContext} from 'react-responsive'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResponsiveContext.Provider value={{ width: 10 }}>
      <App/>
    </ResponsiveContext.Provider>
    
  </React.StrictMode>
);
