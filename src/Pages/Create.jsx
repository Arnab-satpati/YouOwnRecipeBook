import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Create = () => {

  const navigate = useNavigate();
    const {data, setData} =useContext(recipeContext);
    const { register, handleSubmit, reset} = useForm();
    const submithandler = (recipe) => {
        recipe.id = nanoid();

        setData([...data, recipe]);
        toast.success("Recipe Added Successfully");
        reset();
        navigate("/recipe");
    }
  return (
    <div className='flex justify-center items-center h-[100vh] w-full'>
      <form className='flex flex-col gap-4 w-[50%] m-auto' onSubmit={handleSubmit(submithandler)}>
      
      <input className='bg-[transparent] border-b outline-0 pb-2' {...register("image")} type="url" placeholder='image url here ->'/>
      <input className='bg-[transparent] border-b outline-0 pb-2' {...register("title")} type="text" placeholder='recipe title'/>
      <textarea className='bg-[transparent] border-b p-2 outline-0 cursor-pointer mt-2'{...register("description")} type="text" placeholder='description'></textarea>
      <select className='bg-[transparent] border-b  p-2 outline-0 cursor-pointer mt-2'{...register("category")} type="text" placeholder='Category'>
        <option className='text-black' value="Breakfast">Breakfast</option>
        <option className='text-black' value="Lunch">Lunch</option>
        <option className='text-black' value="Dinner">Dinner</option>
      </select>
      <button className='px-2 py-3 mt-3 cursor-pointer bg-amber-500 rounded-2xl w-1/4 hover:bg-amber-800'>Save Recipe</button>
    </form>
    </div>
  )
}

export default Create