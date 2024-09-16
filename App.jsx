import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { ThemeContextProvider } from './contexts/ThemeContext'

import './App.css'

const App = () => {
  

  return (
    <ThemeContextProvider>
      <Header />
      <Outlet />
    </ThemeContextProvider>
  )
}

export default App
