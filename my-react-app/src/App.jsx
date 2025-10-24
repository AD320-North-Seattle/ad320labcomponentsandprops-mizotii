import Footer from './components/Footer'
import RecipeContainer from './components/RecipeContainer'
import { recipes } from './data/data'
import './App.css'

function App() {

  return (
    <>
      <RecipeContainer recipes={recipes} />
      <Footer sources={parseSources({recipes})} />
    </>
  )
}

function parseSources({ recipes }) {
  return (recipes.map((recipe) => recipe.source));
}

export default App
