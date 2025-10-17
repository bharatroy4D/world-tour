import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";

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