import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
// import AddServices from "../Pages/Home/Services/AddServices";
import AddServices from '../Pages/Home/Servicess/AddServices'
import AllServices from "../Pages/Home/Servicess/AllServices";
import ServiceDetails from "../Pages/Home/Servicess/ServiceDetails";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Reviews";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'addServices',
                element: <PrivateRoute>
                    <AddServices />
                </PrivateRoute>,
                loader: ()=>fetch('https://webpoint-server2.vercel.app/services')
            },
            {
                path: 'checkout/:id',
                element: <PrivateRoute><Checkout /></PrivateRoute>,
                loader: ({params})=>fetch(`https://webpoint-server2.vercel.app/services/${params.id}`)
            },
            {
                path: 'serviceDetails/:id',
                element: <ServiceDetails />,
                loader: ({params})=>fetch(`https://webpoint-server2.vercel.app/services/${params.id}`)
            },
            {
                path: 'allServices',
                element: <AllServices />
                // loader: ({params})=>fetch(`https://webpoint-server2.vercel.app/services/${params.id}`)
            },
            {
                path: 'reviews',
                element: <PrivateRoute><Orders /></PrivateRoute>
            },
            {
                path: 'blogs',
                element:<Blog />
                // loader: ()=>fetch('https://webpoint-server2.vercel.app/blogs')
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
]);

export default router; 