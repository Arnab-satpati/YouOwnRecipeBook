import { Link } from 'react-router-dom'
const RecipeCards = ({ recipe }) => {
  return (
    <Link  className='w-[30%] hover:scale-[102%] duration-300' to={`/recipe/${recipe.id}`}>

    <div className='w-[100%] relative'>
        <img className='w-[100%] py-5 rounded-2xl h-[10rem] object-cover' src={recipe.image} />
        <div className='flex flex-col border-l-2 border-amber-600'>
        <h1 className='text-2xl pl-4 font-bold'>{recipe.title}</h1>
        <p className='px-4 text-gray-500'>{recipe.category}</p>
        <p className='px-4 text-gray-500'>{recipe.description.slice(0,100)}.... <small className='text-amber-500 cursor-pointer'>more</small> </p>
        
        </div>
    </div>

    </Link>
  )
}

export default RecipeCards