import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login';

const router = createBrowserRouter ([
  {
    path: "/login",
    element: <LoginPage />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
