import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout.jsx';
import Home from './Home.jsx';
import Products from './Products.jsx';
import Product from './Product.jsx';
import ErrorPage from './ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/products",
        element:<Products></Products>,
        loader:()=>fetch(`https://dummyjson.com/products`)
      },
      {
        path:"/product/:id",
        element:<Product></Product>,
        loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
      }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
