import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Main} from './Main'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </QueryClientProvider>


);