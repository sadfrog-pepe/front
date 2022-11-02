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

function App() {
    const [count, setCount] = useState(0);

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
                    <Route index element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
