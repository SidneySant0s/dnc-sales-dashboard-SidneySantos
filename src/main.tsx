import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/globalStyle.ts'
import { AppthemeProvider } from './contexts/AppThemeContext.tsx'

 ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppthemeProvider >
      <GlobalStyle />
      <App />
    </AppthemeProvider>
  </React.StrictMode>
)
