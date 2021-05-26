import { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // init netlify identity connection
    // Whether if the user is login or logout
    netlifyIdentity.init();
  }, []);

  // When user click on the login button to activate this function
  const login = () => {
    netlifyIdentity.open();
  };

  const context = { user, login };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
