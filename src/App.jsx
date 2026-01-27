import { ThemeProvider } from 'react-bootstrap';
import { logEvent } from "firebase/analytics";
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Head from './header/head'
import BodySections from './body/body_sections'
import BodyFooter from './footer/body_footer'
import TopHead from './top'
import Facturacion from './pages/Facturacion'
import { useEffect } from 'react';
import { analytics } from './services/firebaseClient';

function App() {

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "notification_received")
    }
  }, [])

  const HomePage = () => (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs"
    >
      {/* <PublicitationImg 
        autoShow={true}
        showDuration={0}
      /> */}
      <TopHead />
      <Head />
      <BodySections />
      <BodyFooter />
    </ThemeProvider>
  );

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/facturacion" element={<Facturacion />} />
    </Routes>
  );
}

export default App
