import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/routes';
import './index.css'
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from './providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <QueryClientProvider client={queryClient}>
      <div className="">
          <RouterProvider router={router} />
        </div>
    </QueryClientProvider>
      </HelmetProvider>

    </AuthProvider>
  </React.StrictMode>,
)
// npm run build
// firebase deploy 