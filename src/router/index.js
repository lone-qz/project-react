import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import List from "../components/List";
import Shu from "../components/Shu";
import Add from "../components/Add";
let router= createBrowserRouter([
    {
        path:"/home",
        element:<Home></Home>,
        
        children:[
            {
                path:"shu",
                element:<Shu></Shu>
            },
            {
                path:"list",
                element:<List></List>
            },
            {
                path:'',
                element:<Navigate to={'/home/list'}></Navigate>
            }
        ]
    },
    {
        path:'/add',
        element:<Add></Add>
    },
    {
        path:"/",
        element:<Navigate to={'/home'}></Navigate>
    }
   
])
export default router;// src/router/index.js