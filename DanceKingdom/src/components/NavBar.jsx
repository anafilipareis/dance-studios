import { Link } from "react-router-dom";
import { useContext } from "react";                    
import { AuthContext } from "../context/auth.context"; 
import logo from "../assets/logo.png"; // Import your logo image

function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <header className="navbar">
      <img src={logo} alt="Logo" className="logo" /> {/* Add logo */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dance-styles">Dance Styles</Link>
          </li>

          {isLoggedIn && (
            <>
              <li>
                <span>Good to see you {user.name}</span>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/dance-classes">Dance Classes</Link>
              </li>
              <li>
                <button onClick={logOutUser}>Logout</button>
              </li>
            </>
          )}

          {!isLoggedIn && (
            <>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;