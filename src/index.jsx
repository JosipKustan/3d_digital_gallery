import "./style.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  // <BrowserRouter>
    /*<RouterProvider router={router} />*/
    <App/>
  // </BrowserRouter>
);
