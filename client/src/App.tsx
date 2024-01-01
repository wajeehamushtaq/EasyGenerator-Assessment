import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/auth';

import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import WelcomePage from './pages/Welcome';

function PrivateRoute({ element }: { element: React.ReactElement }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/" />;
}

function App() {
  return (
    <div className="flex items-center justify-center">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/welcome"
              element={<PrivateRoute element={<WelcomePage />} />}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;