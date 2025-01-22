import React from 'react';
import {useLocation} from "react-router-dom";
import {IProduct} from "../models/IProduct.ts";
import products from "../components/products/Products.tsx";
import {IRecipe} from "../models/IRecipe.ts";

const RecipeDetailsPage = () => {
    const {state} = useLocation();
    const recipe:IRecipe = state

    return (
        <div>
            {recipe.ingredients}
        </div>
    );
};

export default RecipeDetailsPage;
