import { ThemeProvider } from 'react-bootstrap'
import './App.css'
import Head from './header/head'
import BodySections from './body/body_sections'
import BodyFooter from './footer/body_footer'

function App() {

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xl"
    >
      <div>
        <Head />
        <BodySections />
        <BodyFooter />
      </div>
    </ThemeProvider>
  )
}

export default App
