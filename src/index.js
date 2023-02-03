import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { apiSlice } from './features/api/apiSlice';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

import 'react-loading-skeleton/dist/skeleton.css';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <SkeletonTheme highlightColor="#ebc7e691">
        <App />
      </SkeletonTheme>
    </ApiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
