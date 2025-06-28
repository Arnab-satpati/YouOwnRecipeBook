import { useParams } from 'react-router-dom';
import { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';

const RecipeDetails = () => {
  const { data }=useContext(recipeContext);
  const params = useParams();
  const navigate = useNavigate();
  const recipe = data.find(recipe => recipe.id == params.id);
  return (recipe ? (
    <div className="flex flex-col w-full h-screen">
  {/* Sticky Title */}
  <div className="sticky mt-[5rem] bg-black z-50 pb-8 pt-4 text-center shadow-md">
    <h1 className="text-4xl font-bold">{recipe.title}</h1>
  </div>

  {/* Main 2-Column Section */}
  <div className="flex flex-1 overflow-hidden ">
    
    {/* left: Sticky Image */}
    <div className="w-1/2 relative px-8">
      <div className="sticky"> {/* Adjust top to leave space for title */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-xl w-full max-h-[70vh] object-cover shadow-lg"
        />
      </div>
    </div>

    {/* right: Scrollable Recipe Details */}
    <div className="w-1/2 flex flex-col justify-start pt-5 gap-2">
      {/* Category */}
      <p className="text-lg font-semibold">Category: {recipe.category}</p>

      {/* Scrollable Description Box */}
      <div className="h-[50vh] overflow-y-auto pr-8 custom-scrollbar">
        <p className="text-gray-700 text-justify">{recipe.description}</p>
      </div>

      {/* Go Back Button (not scrollable) */}
      <div className='flex gap-16'>
        <button onClick={() => navigate("/recipe")} className="px-4 py-3 bg-[#101010] cursor-pointer hover:bg-amber-600 rounded-2xl w-1/3 text-white">
       Go Back
      </button><button onClick={() => navigate(`/recipe/update/${recipe.id}`)} className="px-4 py-3 bg-[#101010] cursor-pointer hover:bg-amber-600 rounded-2xl w-1/3 text-white">
       Quick Update
      </button>
      </div>
    </div>

  </div>
</div>

  ) : (
    <h1>Recipe not found</h1>
  ));
}

export default RecipeDetails