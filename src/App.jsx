import { ThemeProvider } from 'react-bootstrap';
import { logEvent } from "firebase/analytics";
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import './App.css'
import Head from './header/head'
import BodySections from './body/body_sections'
import BodyFooter from './footer/body_footer'
import TopHead from './top'
import Facturacion from './pages/Facturacion'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Registros from './pages/Registros'
import { analytics } from './services/firebaseClient';
import { AuthContext } from './context/AuthContext';

// Componente para rutas protegidas
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        background: 'var(--neutral-200)'
      }}>
        <div style={{ fontSize: '18px', color: 'var(--neutral-600)' }}>
          Cargando...
        </div>
      </div>
    );
  }
  
  return user ? children : <Navigate to="/login" replace />;
};

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
    <HashRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/facturar" element={<Facturacion />} />
      <Route path="/login" element={<Login />} />
      <Route 
        path="/dashboard" 
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/registros" 
        element={
          <PrivateRoute>
            <Registros />
          </PrivateRoute>
        } 
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
      </HashRouter>
  );
}

export default App
