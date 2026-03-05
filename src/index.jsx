import './style.css';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
