import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.tsx'
import ToggleMenuProvider from './context/ToggleMenuContext.tsx'
import { FoodsProvider } from './context/FoodsContext.tsx'
import { FoodsCartProvider } from './context/FoodsCartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <FoodsProvider>
          <ToggleMenuProvider>
                <FoodsCartProvider>
                  <App />   
                </FoodsCartProvider>
          </ToggleMenuProvider>
        </FoodsProvider>
      </ThemeProvider>     
    </Router>  
)
