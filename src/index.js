import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store, persistor } from '../src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'

import { ThemeProvider } from '@emotion/react'
import { theme } from "./constants/theme";
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App />
          </PersistGate>
        </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
