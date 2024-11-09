import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Components/LayoutArea/Layout/Layout.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Layout />
    <ToastContainer />
  </BrowserRouter>
);
