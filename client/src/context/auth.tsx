import React, { createContext, useState, useContext, ReactNode } from 'react';
import useApiRequest from '../hooks/useApiRequest';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (jwt: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { sendRequest } = useApiRequest();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('jwt') !== null
  );

  const login = (jwt: string) => {
    localStorage.setItem('jwt', jwt);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    const url =  'http://localhost:3000/auth/logout'
    const option = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: null
    }

    const response = await sendRequest(url, option);
    if(response){
      localStorage.removeItem('jwt');
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
