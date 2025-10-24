import Recipe from "./Recipe";

function RecipeContainer({ recipes }) {
    return (
        recipes.map((item, index) => (
            <Recipe key={index} recipe={item} />
        ))
    )
}

export default RecipeContainer;