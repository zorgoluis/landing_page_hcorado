import { Container, ThemeProvider } from 'react-bootstrap'
import './App.css'
import Head from './header/head'
import BodySections from './body/body_sections'

function App() {

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div>
        <Head />
        <BodySections />
      </div>
    </ThemeProvider>
  )
}

export default App
