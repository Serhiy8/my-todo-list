import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ThemeProvider } from 'styled-components'
import theme from './theme.styled.js'
import Main from './supabaseServices/userSession.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Main />        
        <ToastContainer autoClose={1500}/>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
