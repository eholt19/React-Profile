import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <NavLink to="/" end className="navbar-item" activeClassName="has-text-weight-bold">
            About Me
          </NavLink>
          <NavLink to="/portfolio" className="navbar-item" activeClassName="has-text-weight-bold">
            Portfolio
          </NavLink>
          <NavLink to="/contact" className="navbar-item" activeClassName="has-text-weight-bold">
            Contact
          </NavLink>
          <NavLink to="/resume" className="navbar-item" activeClassName="has-text-weight-bold">
            Resume
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
