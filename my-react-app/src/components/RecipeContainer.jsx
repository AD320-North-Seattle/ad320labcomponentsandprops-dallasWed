import Recipe from "./Recipe.jsx";
import { recipes } from "../data";

function RecipeContainer() {
  return (
    <div className="recipe-container">
        {recipes.map(recipe => <Recipe key="recipe.name" recipe={recipe} />)}
    </div>
  );
}

export default RecipeContainer;
