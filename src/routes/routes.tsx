import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";

import HomePage from "../pages/HomePage.tsx";
import CustomErrorLayout from "../layouts/CustomErrorLayout.tsx";

import ProductsPage from "../pages/ProductsPage.tsx";
import ProductDetailsPage from "../pages/ProductDetailsPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";
import RecipeDetailsPage from "../pages/RecipeDetailsPage.tsx";


export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>, children:[
            {
                index: true, element: <HomePage/>
            },
            {
                path: "products", element: <ProductsPage/>
            },
            {
                path: "products/:id", element: <ProductDetailsPage/>
            },
            {
                path: "recipes", element:<RecipesPage/>
            },
            {
                path: "recipes/:id", element:<RecipeDetailsPage/>
            }
        ],
        errorElement: <CustomErrorLayout/>
    },
    ]
)
