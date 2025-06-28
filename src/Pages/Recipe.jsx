import { use, useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import RecipeCards from '../components/RecipeCards';
import { useNavigate } from 'react-router-dom';
const Recipe = () => {
  const { data } = useContext(recipeContext);
  const navigate = useNavigate();
  const renderrecipe = data.map(recipe => (
      <RecipeCards key={recipe.id} recipe={recipe} />
  ))
  return (
    <div className='flex justify-center items-center w-[100%] relative custom-scrollbar'>
      <button onClick={() => navigate('/create')} className="px-[3rem] py-[.7rem] text-[#c9c3c3] fixed outline-1 z-50 cursor-pointer bg-[#6d6b6b11] outline-[#666464] backdrop-blur-md top-[1.73rem] right-[12rem] hover:bg-[#ffffff11] rounded-2xl ">
        Add recipe
      </button>
      <div className='w-[80%] items-center justify-center flex flex-wrap gap-5 py-[5rem] '>
      {data.length > 0 ?renderrecipe: <h1 className='text-3xl text-center'>No Recipes Found</h1>}
    </div>
    </div>
  )
}

export default Recipe