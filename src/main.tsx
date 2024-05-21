import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <ToastContainer />
    <App />
  </>
);
