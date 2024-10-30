import { ThemeProvider } from 'react-bootstrap';
import './App.css'
import Head from './header/head'
import BodySections from './body/body_sections'
import BodyFooter from './footer/body_footer'
import TopHead from './top'

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs"
    >
      <TopHead />
      <Head />
      <BodySections />
      <BodyFooter />
    </ThemeProvider>
  )
}

export default App
