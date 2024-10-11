import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './components/Home.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Error from './components/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>,
        
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
   <RouterProvider router={router} />
   </HelmetProvider>
    
  </StrictMode>,
)
