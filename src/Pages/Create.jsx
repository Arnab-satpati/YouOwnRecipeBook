import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { recipeContext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipeContext);
  const { register, handleSubmit, reset } = useForm();

  const submithandler = (recipe) => {
    recipe.id = nanoid();
    const copyData = [...data];
    copyData.push(recipe);
    setData(copyData);

    localStorage.setItem("recipes", JSON.stringify(copyData));

    toast.success("Recipe Added Successfully");
    reset();
    navigate("/recipe");
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-4 py-20">

      {/* Radiant Orange Glow Orb */}
      <div className="absolute z-0 blur-[150px] opacity-80 bg-[#ff5c00] rounded-full w-[45.375rem] h-[33.5rem] top-[3.8125rem] right-[-6.125rem]" />

      {/* Radiant Form Container */}
      <form
        onSubmit={handleSubmit(submithandler)}
        className="relative top-[2rem] z-10 w-full max-w-xl backdrop-blur-lg bg-white/5 border border-amber-500/55 rounded-2xl px-5 py-6 shadow-[0_0_30px_#f59e0b30] flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-white mb-4">Create Your Recipe</h1>

        {/* Image URL */}
        <input
          {...register("image")}
          type="url"
          placeholder="Image URL"
          className="w-full bg-transparent border-b border-white focus:outline-none focus:border-amber-400 py-2"
        />

        {/* Title */}
        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="w-full bg-transparent border-b border-white focus:outline-none focus:border-amber-400 py-2 placeholder:text-amber-100"
        />

        {/* Description */}
        <textarea
          {...register("description")}
          placeholder="Description"
          rows={3}
          className="w-full bg-transparent border-b border-white focus:outline-none focus:border-amber-400 py-2 placeholder:text-amber-100"
        />

        {/* Category */}
        <select
          {...register("category")}
          className="w-full bg-transparent text-white border-b border-white py-2 focus:outline-none"
        >
          <option className="bg-black text-white" value="Breakfast">Breakfast</option>
          <option className="bg-black text-white" value="Lunch">Lunch</option>
          <option className="bg-black text-white" value="Dinner">Dinner</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-1/3 mt-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold py-3 rounded-lg shadow-lg transition-all"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
