import React, {useEffect, useState} from 'react';
import {IRecipe} from "../../models/IRecipe.ts";
import {getRecipes} from "../../services/api.service.tsx";
import Recipe from "../recipe/Recipe.tsx";

const Recipes = () => {
    const [recipes, setRecipes] = useState<IRecipe[]>([])
    useEffect(() => {
        getRecipes().then(value=> setRecipes(value))
    }, []);
    return (
        <div>
            {
                recipes.map(recipe=><Recipe key={recipe.id} recipe={recipe}/>)
            }
        </div>
    );
};

export default Recipes;
