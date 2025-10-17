import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/home/Home";
import About from "../pages/abouts/About";
import Destination from "../pages/destination/Destination";
import Services from "../pages/services/Services";
import Blogs from "../pages/blogs/Blogs";
import Contact from "../pages/contact/Contact";
import ViewDetails from "../Components/ViewDetails/ViewDetails";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/destination',
        element:<Destination/>
      },
      {
        path:'/services',
        element:<Services/>
      },
      {
        path:'/blogs',
        element:<Blogs/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/viewDetails/:id',
        element:<ViewDetails/>
      }
    ]
    },
])