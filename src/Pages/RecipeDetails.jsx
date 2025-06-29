import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { recipeContext } from '../context/RecipeContext';
import ReactMarkdown from 'react-markdown';

const RecipeDetails = () => {
  const { data } = useContext(recipeContext);
  const params = useParams();
  const navigate = useNavigate();
  const recipe = data.find((recipe) => recipe.id === params.id);

  return recipe ? (
    <div className="flex flex-col w-full h-screen">
      {/* Sticky Title */}
      <div className="sticky mt-[5rem] bg-black z-50 pb-8 pt-4 text-center shadow-md">
        <h1 className="text-4xl font-bold">{recipe.title}</h1>
      </div>

      {/* Main 2-Column Section */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Sticky Image */}
        <div className="min-w-[40rem] relative px-8">
          <div className="sticky">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-xl w-full max-h-[70vh] object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Right: Scrollable Recipe Details */}
        <div className='flex flex-col'>
        <div className="w-full flex flex-col justify-start max-h-[25rem] pt-5 gap-4 pr-8 overflow-y-auto custom-scrollbar">
          <p className="text-lg font-semibold text-amber-500">
            🍽️ Category: {recipe.category}
          </p>

          <div className="text-white/90 text-justify leading-relaxed">
            <h2 className="text-xl font-semibold mb-1">Description:</h2>
            <p className="text-white/70">{recipe.description}</p>
          </div>

          {/* Markdown instructions rendering */}
          {recipe.instructions && (
            <div className="text-white/90 mt-4">
              <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
              <div className="prose prose-invert prose-amber max-w-none">
                <ReactMarkdown>{recipe.instructions}</ReactMarkdown>
              </div>
            </div>
          )}          
        </div>
        {/* Buttons */}
        <div className="flex w-2/3 gap-5 mt-6">
            <button
              onClick={() => navigate("/recipe")}
              className="px-4 py-3 duration-500 bg-[#101010] hover:bg-amber-600 rounded-2xl w-1/2 text-white transition-all"
            >
               Go Back
            </button>
            <button
              onClick={() => navigate(`/recipe/update/${recipe.id}`)}
              className="px-4 py-3 bg-[#101010] hover:bg-amber-600 duration-500 rounded-2xl w-1/2 text-white transition-all"
            >
              Quick Update
            </button>
        </div>
      </div>
    </div>
    </div>
  ) : (
    <h1 className="text-white text-3xl py-[10rem] text-center">Recipe not found</h1>
  );
};

export default RecipeDetails;
