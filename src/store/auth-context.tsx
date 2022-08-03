import { useState, createContext, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";

type AuthContextType = {
  token: string | null,
  isLoggedIn: boolean,
  login: (token: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {} 
});

export const AuthContextProvider = (props: { children: ReactElement<JSXElementConstructor<any>>}) => {
  const [token, setToken] = useState<string | null>(null);

  const userIsLoggedIn: boolean = !!token;

  const loginHandler = (token: string) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
