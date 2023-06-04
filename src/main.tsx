import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@/index.css'
import App from '@/App'
import Thanks from '@/thanks'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/thanks' element={<Thanks />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
