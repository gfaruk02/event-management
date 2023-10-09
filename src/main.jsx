import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import AuthProvider from './components/provider/AuthProvider';
import Blog from './components/Blog/Blog';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Details from './components/Services/Details';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/services.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>
      },

      {
        path:'/details/:id',
        element: <PrivateRoute> <Details></Details></PrivateRoute>,
        loader: ()=> fetch('./services.json')
      },
      {
        path: "/about",
        element: <PrivateRoute><About></About></PrivateRoute>
      },
      {
        path: "/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
