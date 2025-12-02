import Ingredients from "./Ingredients.jsx";
import Instructions from "./Instructions.jsx";

function Recipe(props) {
  return (
    <div className="recipe-card">
        <h2 className="recipe-name">{props.recipe.name}</h2>

        <div>
            <h3 className="sub-header">Ingredients:</h3>
            <Ingredients ingredients={props.recipe.ingredients} />
        </div>

        <div>
            <h3 className="sub-header">Instructions:</h3>
            <Instructions instructions={props.recipe.instructions} />
        </div>
        
        


    </div>
  );
}

export default Recipe;