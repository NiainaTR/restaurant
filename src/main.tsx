import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.tsx'
import ToggleMenuProvider from './context/ToggleMenuContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ToggleMenuProvider>
            <App />   
          </ToggleMenuProvider>
      </ThemeProvider>     
    </BrowserRouter>  
)
