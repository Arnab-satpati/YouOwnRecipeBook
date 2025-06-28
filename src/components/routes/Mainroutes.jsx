import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import Create from '../../Pages/Create'
import Recipe from '../../Pages/Recipe'
import About from '../../Pages/About'
import Magic from '../../Pages/Magic'
import RecipeDetails from '../../Pages/RecipeDetails'
import RecipeUpdate from '../../Pages/RecipeUpdate'
const Mainroutes = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<Create />} />
    <Route path="/recipe" element={<Recipe />} />
    <Route path="/recipe/update/:id" element={<RecipeUpdate />} />
    <Route path="/recipe/:id" element={<RecipeDetails />} />
    <Route path="/askme" element={<Magic />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<h1>Page not found</h1>} />
  </Routes>
}

export default Mainroutes