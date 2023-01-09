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
import Auth from './hoc/auth';

// 새롭게 추가중인 것들
import Header from './component/organisms/Header';
import NavigationBar from './component/organisms/NavigationBar';

function App() {
  const AuthMainPage = Auth(MainPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);
  const Layout = () => {
    return (
      <div>
        {/* <MainBanner />
        <MainMenu />
        <Outlet /> */}
        <Header />
        <NavigationBar />
        <main>
          <section>section1</section>
          <section>section2</section>
          <section>section3</section>
        </main>
        <footer>footer</footer>
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
