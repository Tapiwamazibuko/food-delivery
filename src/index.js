import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Product, {loader as productsLoader} from './Product';
import Recipe, {loader as recipesLoader} from './Recipe';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/ErrorPage';
import Careers from './Careers';
import Blog from './Blog';
import Categories, {loader as categoriesLoader} from './Categories';


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
    loader: recipesLoader,
  },
  {
    path: "products/:productId",
    element: <Product />,
    errorElement: <ErrorPage />,
    loader: productsLoader,
  },
  {
    path: "careers",
    element: <Careers />,
    errorElement: <ErrorPage />,
  },
  {
    path: "blog",
    element: <Blog />,
    errorElement: <ErrorPage />,
  },
  {
    path: "categories/:categoryId",
    element: <Categories />,
    errorElement: <ErrorPage />,
    loader: categoriesLoader,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
