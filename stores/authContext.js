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
    // Event listener
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
      console.log("login event");
    });

    netlifyIdentity.on("logout", () => {
      setUser(null);
      console.log("logout event");

      // init netlify identity connection
      // Whether if the user is login or logout
      netlifyIdentity.init();

      return () => {
        netlifyIdentity.off("login");
        netlifyIdentity.off("logout");
      };
    });
  }, []);

  // When user click on the login button to activate this function
  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    // When user click the button for logout
    netlifyIdentity.logout();
  };
  const context = { user, login, logout };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
