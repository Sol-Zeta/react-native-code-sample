import React, { createContext, useState } from 'react';

export interface LoggedContextProps {
  isAuthUser: boolean;
  isFacebookLogin: boolean;
  user: any;
  login: () => void;
  logout: () => void;
  fbLogin: () => void;
  fbLogout: () => void;
  saveUser: (user: any) => void;
}
interface AuthProviderProps {
  children: JSX.Element;
}
export const AuthContext = createContext({} as LoggedContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [isFacebookLogin, SetisFacebookLogin] = useState(false);

  type defaultUserType = Record<string, any>;
  const [user, setUser] = useState<defaultUserType>({
    email: undefined,
    providerData: [{}],
  });

  const login = () => setIsAuthUser(true);
  const logout = () => setIsAuthUser(false);
  const fbLogin = () => SetisFacebookLogin(true);
  const fbLogout = () => SetisFacebookLogin(false);
  const saveUser = (firebaseUser: any) => setUser(firebaseUser);

  return (
    <AuthContext.Provider
      value={{
        isAuthUser,
        isFacebookLogin,
        user,
        login,
        logout,
        fbLogin,
        fbLogout,
        saveUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
