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
import {loader as searchLoader} from './components/Search';
import Categories, {loader as categoriesLoader} from './Categories';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: searchLoader,
  },
  {
    path: "recipes/:recipeId",
    element: <Recipe />,
    errorElement: <ErrorPage />,
    loader:  async ({ params, request }) => {
      const recipe = await recipesLoader({params})
      const { products, categories, cookings , search } = await searchLoader({request})

      return {recipe, products, categories, cookings , search}
      
    },
  },
  {
    path: "products/:productId",
    element: <Product />,
    errorElement: <ErrorPage />,
    loader:  async ({ params, request }) => {
      console.log(params)
      console.log(request)
      const product = await productsLoader({params})
      const { products, categories, cookings , search } = await searchLoader({request})

      return {product, products, categories, cookings , search}
      
    },
  },
  {
    path: "careers",
    element: <Careers />,
    errorElement: <ErrorPage />,
    loader: searchLoader,
  },
  {
    path: "blog",
    element: <Blog />,
    errorElement: <ErrorPage />,
    loader: searchLoader,
  },
  {
    path: "categories/:categoryId",
    element: <Categories />,
    errorElement: <ErrorPage />,
    loader:  async ({ params, request }) => {
      console.log(params)
      console.log(request)
      const { category, foodItems } = await categoriesLoader({params})
      const { products, categories, cookings , search } = await searchLoader({request})

      console.log(category)
      return {category, foodItems, products, categories, cookings , search}
      
    },
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
