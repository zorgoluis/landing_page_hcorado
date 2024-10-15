import { Container, ThemeProvider } from 'react-bootstrap'
import './App.css'
import Head from './header/head'

function App() {

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div>
        <Head />
      </div>
    </ThemeProvider>
  )
}

export default App
