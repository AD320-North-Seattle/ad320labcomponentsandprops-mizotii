import RecipeContainer from './components/RecipeContainer'
import { recipes } from './data/data'
import './App.css'

function App() {

  return (
    <>
      <RecipeContainer recipes={recipes} />
    </>
  )
}

export default App
