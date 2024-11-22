import { ThemeProvider } from 'react-bootstrap';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import './App.css'
import Head from './header/head'
import BodySections from './body/body_sections'
import BodyFooter from './footer/body_footer'
import TopHead from './top'
import { useEffect } from 'react';

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY_ANALYTIC}`,
  authDomain: "endocorado.firebaseapp.com",
  projectId: "endocorado",
  storageBucket: "endocorado.appspot.com",
  messagingSenderId: "1071754826508",
  appId: `${import.meta.env.VITE_API_ID_ANALYTIC}`,
  measurementId: "G-M577PQ2JEJ"
};

function App() {

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    logEvent(analytics, "notification_received")
  }, [])

  
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
