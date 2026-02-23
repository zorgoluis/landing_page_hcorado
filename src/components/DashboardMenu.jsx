import { useState } from 'react';
import './dashboardMenu.css';

const DashboardMenu = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dashboard-menu">
      <div className="menu-header">
        <h2 className="menu-title">Dashboard</h2>
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
        </button>
      </div>

      <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
        <li className="menu-item">
          <a href="/dashboard">
            <i className="bi bi-house-fill"></i> Inicio
          </a>
        </li>
        <li className="menu-divider"></li>
        <li className="menu-item user-info">
          <i className="bi bi-person-circle"></i>
          <span>{user?.email}</span>
        </li>
        <li className="menu-item">
          <button onClick={onLogout} className="logout-btn">
            <i className="bi bi-box-arrow-right"></i> Cerrar Sesión
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardMenu;
