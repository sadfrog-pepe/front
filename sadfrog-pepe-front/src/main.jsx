import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyle.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyle />
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
