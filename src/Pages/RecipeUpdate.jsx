import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { recipeContext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const RecipeUpdate = () => {
  useEffect(() => {}, []);

  const navigate = useNavigate();
  const { data, setData } = useContext(recipeContext);
  const prompts = useParams();
  const recipe = data.find((recipe) => recipe.id === prompts.id);

  if (!recipe) {
    return <h1 className="text-3xl text-center text-white">Recipe not found</h1>;
  }

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: recipe?.image,
      title: recipe?.title,
      description: recipe?.description,
      category: recipe?.category,
    },
  });

  const submithandler = (recipe) => {
    const index = data.findIndex((item) => item.id === prompts.id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...recipe };
    setData(copyData);
    localStorage.setItem("recipes", JSON.stringify(copyData));

    toast.success('Recipe Updated Successfully');
    navigate(`/recipe/${prompts.id}`);
  };

  const DeleteHandler = () => {
    const updatedData = data.filter((r) => r.id !== prompts.id);
    setData(updatedData);
    localStorage.setItem("recipes", JSON.stringify(updatedData));
    toast.success('Recipe Deleted Successfully');

    navigate(`/recipe`);
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Radiant Orange Glow Orb */}
      <div className="absolute z-0 blur-[150px] opacity-80 bg-[#ff5c00] rounded-full w-[45.375rem] h-[33.5rem] top-[3.8125rem] right-[-6.125rem]" />

      <form
        className="relative top-[3rem] z-10 w-full max-w-xl backdrop-blur-lg bg-white/5 border border-amber-500/55 rounded-2xl px-5 py-6 shadow-[0_0_30px_#f59e0b30] flex flex-col gap-4"
        onSubmit={handleSubmit(submithandler)}
      >
        <h1 className="text-3xl font-bold text-white mb-4">Update Your Recipe</h1>

        <input
          className="bg-transparent border-b border-white focus:outline-none focus:border-amber-400 py-2 placeholder:text-amber-100"
          {...register('image')}
          type="url"
          placeholder="Image URL"
        />

        <input
          className="bg-transparent border-b border-white focus:outline-none focus:border-amber-400 py-2 placeholder:text-amber-100"
          {...register('title')}
          type="text"
          placeholder="Recipe Title"
        />

        <textarea
          className="bg-transparent border-b border-white p-2 focus:outline-none focus:border-amber-400 placeholder:text-amber-100 mt-2"
          {...register('description')}
          placeholder="Description"
        />

        <select
          className="bg-transparent text-white border-b border-white p-2 focus:outline-none mt-2"
          {...register('category')}
        >
          <option className="bg-black text-white" value="Breakfast">Breakfast</option>
          <option className="bg-black text-white" value="Lunch">Lunch</option>
          <option className="bg-black text-white" value="Dinner">Dinner</option>
        </select>

        <div className="flex gap-5 mt-4">
          <button
            type="submit"
            className="px-4 py-3 bg-amber-500 hover:bg-amber-600 rounded-2xl w-1/2 text-white font-semibold shadow-lg transition-all"
          >
            Update Recipe
          </button>
          <button
            type="button"
            onClick={DeleteHandler}
            className="px-4 py-3 text-[#641111] bg-[#101010] border border-[#641111] hover:text-red-500 hover:border-red-500 rounded-2xl w-1/2 font-semibold transition-all"
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeUpdate;
