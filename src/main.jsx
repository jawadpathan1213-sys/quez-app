import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ScoreContextProvider } from './context/ScorecontextProvider.jsx'


createRoot(document.getElementById('root')).render(
  <ScoreContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ScoreContextProvider>
)
