import { Link } from "react-router-dom";
import { useContext } from "react";                    
import { AuthContext } from "../context/auth.context"; 


function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 

  return (
    <nav>
      <Link to ="/">
        <button>Home</button>
      </Link>
      <Link to ="/dance-styles">
        <button>Dance Styles</button>
      </Link>

      {isLoggedIn && (
        <>
          <span>Good to see you {user.name}</span>
          <Link to ="/profile">
          <button>Profile</button>
          </Link>
          <Link to="/dance-classes">
          <button>Dance Classes</button>
          </Link>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}

      {!isLoggedIn && (
              <>
                <Link to="/signup"> <button>Sign Up</button> </Link>
                <Link to="/login"> <button>Login</button> </Link>
              </>
            )}

      
      
    </nav>
  )
}

export default NavBar;