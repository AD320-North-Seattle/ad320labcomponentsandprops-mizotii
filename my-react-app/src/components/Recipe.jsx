const Recipe = ({ recipe }) => {
    return (
        <div className="Recipe">
            <h2>{recipe.title}</h2>

            <ul>
                <li>Time: {recipe.time} minutes</li>
                <li>Serves: {recipe.serves}</li>
            </ul>

            <table>
                <thead>
                    <tr>
                        <th>Ingredients</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {recipe.ingredients.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {recipe.steps.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}

export default Recipe;