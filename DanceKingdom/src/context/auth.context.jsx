import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL=import.meta.env.VITE_DEPLOYMENT_URL;
 
const AuthContext = React.createContext();
 
function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  
  /* 
    Functions for handling the authentication status (isLoggedIn, isLoading, user)
    will be added here later in the next step
  */
    const storeToken = (token) => {       //  <==  ADD
      localStorage.setItem('authToken', token);
    }

    const authenticateUser = () => {
      const storedToken = localStorage.getItem('authToken');
    
      if (storedToken) {
        axios.get(
          `${API_URL}/auth/verify`, 
          { headers: { Authorization: `Bearer ${storedToken}`} }
        )
        .then((response) => {
          const userData = response.data;
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(userData); // Set the user data received from the server
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });      
      } else {
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);
      } 
    }
  
    const removeToken = () => {                    // <== ADD
      // Upon logout, remove the token from the localStorage
      localStorage.removeItem("authToken");
    }
   
   
    const logOutUser = () => {                   // <== ADD    
      // To log out the user, remove the token
      removeToken();
      // and update the state variables    
      authenticateUser();
    }  

    useEffect(()=>{
      authenticateUser(); // after the page loads, check if there's a token in localStorage
        // ---> update the state variables accordingly
    }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}
 
export { AuthProviderWrapper, AuthContext };