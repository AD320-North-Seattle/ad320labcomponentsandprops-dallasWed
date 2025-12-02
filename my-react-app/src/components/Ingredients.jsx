const Ingredients = ({ ingredients }) => {
    return (
        <div className="recipe-paragraph">
            {ingredients.map((ingredients, index) => (
                <div key={index}>
                    {ingredients}
                </div>
            ))}
        </div>
    );
}

export default Ingredients;