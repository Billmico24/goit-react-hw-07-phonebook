import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { ThemeProvider } from '@emotion/react'
import { theme } from "./constants/theme";
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
        </Provider>
    </ThemeProvider>
  </React.StrictMode>
);