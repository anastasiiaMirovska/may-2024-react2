import React, {FC} from 'react';
import {IRecipe} from "../../models/IRecipe.ts";
import {Link} from "react-router-dom";

interface IRecipeProps{
    recipe:IRecipe
}

const Recipe:FC<IRecipeProps> = ({recipe}) => {
    return (
        <div>
            <Link state={recipe} to={recipe.id.toString()}>{recipe.name}</Link>
        </div>
    );
};

export default Recipe;
