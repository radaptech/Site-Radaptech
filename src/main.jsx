import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Rola até a seção sem colocar "#secao" na URL
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]')
  const alvo = link && document.querySelector(link.getAttribute('href'))
  if (!alvo) return
  e.preventDefault()
  alvo.scrollIntoView()
})
