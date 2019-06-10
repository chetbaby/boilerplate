import React from 'react';
import { Link } from 'react-router-dom';

interface NavProps {
  getProfile: () => void;
  logoutUser: () => void;
  userId: number;
}

const NavBar: React.FC<NavProps> = props => (
  <div id="navbar">
    <Link to="/">
      <button type="submit" className="navbutton">
        HOMEPAGE
      </button>
    </Link>
    <Link to="/profile">
      <button
        type="submit"
        className="navbutton"
        onClick={() => props.getProfile(props.userId)}
      >
        PROFILE
      </button>
    </Link>
    <Link to="/profile">
    <button className="navbutton">NOTIFICATIONS</button>
    </Link>
    <Link to="/">
      <button
        type="submit"
        className="navbutton"
        onClick={() => props.logoutUser()}
      >
        LOGOUT
      </button>
    </Link>
  </div>
);

export default NavBar;
