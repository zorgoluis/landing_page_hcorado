import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { logoutUser } from '../services/authService';
import DashboardMenu from '../components/DashboardMenu';
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/login');
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
    }
  };

  return (
    <div className="dashboard-container">
      <DashboardMenu user={user} onLogout={handleLogout} />
      
      <div className="dashboard-wrapper">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Bienvenido al Dashboard</h1>
          <p className="dashboard-subtitle">
            Hola, <span className="user-email">{user?.email}</span>
          </p>
        </div>

        <div className="dashboard-grid">
          <Link to="/registros" className="dashboard-card registros">
            <i className="card-icon bi bi-file-text"></i>
            <h3 className="card-title">Registros</h3>
            <p className="card-description">Ver solicitudes de facturas por mes</p>
          </Link>
          <div className="dashboard-card perfil">
            <i className="card-icon bi bi-person-fill"></i>
            <h3 className="card-title">Perfil</h3>
            <p className="card-description">Visualiza tu información personal</p>
          </div>

          <div className="dashboard-card ayuda">
            <i className="card-icon bi bi-question-circle-fill"></i>
            <h3 className="card-title">Ayuda</h3>
            <p className="card-description">Centro de soporte y documentación</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
