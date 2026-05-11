import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className="header-container">
      <div className="header-inner">

        <Link to="/" className="logo-section">
          <img
            src="https://res.cloudinary.com/dtfzhuxyr/image/upload/v1775457990/Screenshot_2026-04-06_121610_nb4zca.png"
            alt="logo"
            className="logo-image"
          />

          <h1 className="logo-title">
            Scientific Revolutions
          </h1>
        </Link>

        <div className="nav-buttons">

          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/cards" className="nav-link">
            Cards
          </Link>

          <Link to="/explore" className="nav-link">
            Explore
          </Link>

          <Link to="/logout" className="logout-btn">
            Log Out
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default Header