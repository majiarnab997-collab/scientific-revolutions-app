import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-inner">

        <img
          src="https://res.cloudinary.com/dtfzhuxyr/image/upload/v1775457990/Screenshot_2026-04-06_121610_nb4zca.png"
          alt="Logo"
          className="image-size"
        />

        <div className="nav-buttons">
          <Link to="/">
            <button className="Header-button">Home</button>
          </Link>

          <Link to="/cards">
            <button className="Header-button">All Cards</button>
          </Link>

          <Link to="/explore">
            <button className="Header-button">Explore</button>
          </Link>


          <Link to="/login">
            <button className="Header-button logout-btn">Log Out</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Header