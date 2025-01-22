import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import Page1 from "../pages/Page1.tsx";
import Child1 from "../pages/Child1.tsx";
import Child2 from "../pages/Child2.tsx";
import HomePage from "../pages/HomePage.tsx";
import CustomErrorLayout from "../layouts/CustomErrorLayout.tsx";
import AdminLayout from "../layouts/AdminLayout.tsx";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element: <HomePage/>
            },
            {path: "page1",
                element: <Page1/>,
                children:[
                    {path:"child1", element: <Child1/>},
                    {path:"child2", element: <Child2/>}
                ]}
        ],
        errorElement: <CustomErrorLayout/>
    },
    {
        path: "/admin", element: <AdminLayout/>
    }
    ]
)
