import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { AuthContext } from '../context/AuthContext';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirigir al dashboard si ya hay sesión activa
  useEffect(() => {
    if (!authLoading && user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, authLoading, navigate]);

  // Mostrar pantalla de carga mientras se verifica la sesión
  if (authLoading) {
    return (
      <div className="login-container">
        <div style={{
          background: 'var(--neutral-100)',
          padding: '40px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div className="spinner" style={{ margin: '0 auto 20px' }}></div>
          <p style={{ color: 'var(--neutral-600)', margin: 0 }}>Verificando sesión...</p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await loginUser(email, password);
      navigate('/dashboard');
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      
      // Mensajes específicos según el tipo de error
      if (err.code === 'auth/invalid-credential') {
        setError('Email o contraseña incorrectos. Verifica tus credenciales.');
      } else if (err.code === 'auth/user-not-found') {
        setError('No existe una cuenta con este email.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Contraseña incorrecta.');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Demasiados intentos fallidos. Intenta más tarde.');
      } else if (err.code === 'auth/user-disabled') {
        setError('Esta cuenta ha sido deshabilitada.');
      } else if (err.code === 'auth/invalid-email') {
        setError('El formato del email no es válido.');
      } else {
        setError('Error al iniciar sesión. Verifica tu conexión e intenta nuevamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="login-title">Acceso al Sistema</h1>
        <p className="login-subtitle">Ingresa tus credenciales para continuar</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span>
                <span className="loading-text">Iniciando sesión...</span>
              </>
            ) : (
              'Iniciar Sesión'
            )}
          </button>
        </form>

        <p className="register-link">
          ¿No tienes cuenta? Contacta al administrador
        </p>
      </div>
    </div>
  );
};

export default Login;
