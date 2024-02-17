import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Product from './Product';
import Recipe from './Recipe';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/ErrorPage';
import Careers from './Careers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "recipes/:recipeId",
    element: <Recipe />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products/:productId",
    element: <Product />,
    errorElement: <ErrorPage />,
  },
  {
    path: "careers",
    element: <Careers />,
    errorElement: <ErrorPage />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Careers/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
