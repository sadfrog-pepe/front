import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyle.jsx';

import { Provider } from 'react-redux';
import store from './modules/store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyle />
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
