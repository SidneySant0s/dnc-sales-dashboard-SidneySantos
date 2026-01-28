import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/globalStyle.ts'
import { AppthemeProvider } from './contexts/AppThemeContext.tsx'
import { Provider } from 'react-redux'
import store from './redux/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppthemeProvider>
        <GlobalStyle />
        <App />
      </AppthemeProvider>
    </Provider>
  </React.StrictMode>
)
