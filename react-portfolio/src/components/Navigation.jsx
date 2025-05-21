import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => 
              `navbar-item ${isActive ? 'has-text-weight-bold has-text-link' : ''}`
            }
          >
            About Me
          </NavLink>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              `navbar-item ${isActive ? 'has-text-weight-bold has-text-link' : ''}`
            }
          >
            Portfolio
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `navbar-item ${isActive ? 'has-text-weight-bold has-text-link' : ''}`
            }
          >
            Contact
          </NavLink>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => 
              `navbar-item ${isActive ? 'has-text-weight-bold has-text-link' : ''}`
            }
          >
            Resume
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
