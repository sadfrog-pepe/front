import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MainBanner from './component/organisms/MainBanner';
import MainMenu from './component/organisms/MainMenu';
import MainProduction from './component/organisms/MainProduction';
import Auth from './hoc/auth';

function App() {
  const AuthMainPage = Auth(MainPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);
  const Layout = () => {
    return (
      <div>
        <MainProduction />
        <MainBanner />
        <MainMenu />
        <Outlet />
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AuthMainPage />} />
          <Route path="/login" element={<AuthLoginPage />} />
          <Route path="/register" element={<AuthRegisterPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
