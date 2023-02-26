import './style.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  // <BrowserRouter>
  /* <RouterProvider router={router} /> */
  <App />,
  // </BrowserRouter>
);
