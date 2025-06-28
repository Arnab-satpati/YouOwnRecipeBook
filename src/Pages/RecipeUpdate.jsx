import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const RecipeUpdate = () => {

    const navigate = useNavigate();
    const {data, setData} =useContext(recipeContext);
    const prompts = useParams();
    const recipe= data.find((recipe) => recipe.id === prompts.id);
    if(!recipe) {
        
      return <h1 className='text-3xl text-center'>Recipe not found</h1>
    }

    const { register, handleSubmit} = useForm({defaultValues: {
        image: recipe.image,
        title: recipe.title,
        description: recipe.description,
        category: recipe.category
    }});

    const submithandler = (recipe) => {
    
        const index = data.findIndex((item) => item.id === prompts.id);
        const copyData=[...data];
        copyData[index]= {...copyData[index], ...recipe};
        setData(copyData);
        toast.success("Recipe Updated Successfully");
        navigate(`/recipe/${prompts.id}`);22
    }

    const DeleteHandler = () => {
        const updatedData = data.filter((r) => r.id!=prompts.id);
        setData(updatedData);
        toast.success("Recipe Deleted Successfully");
        navigate(`/recipe`);
    }

  return (
    <div className='flex justify-center items-center h-[100vh] w-full'>
      <form className='flex flex-col gap-4 w-[50%] m-auto' onSubmit={handleSubmit(submithandler)}>

      <input className='border-b bg-transparent outline-0 pb-2' {...register("image")} type="url" />
      <input className='border-b bg-transparent outline-0 pb-2' {...register("title")} type="text" />
      <textarea className='border-b bg-transparent p-2 outline-0 cursor-pointer mt-2'{...register("description")} type="text" ></textarea>
      <select className='border-b  bg-transparent p-2 outline-0 cursor-pointer mt-2'{...register("category")} type="text" >
        <option className='text-black' value="Breakfast">Breakfast</option>
        <option className='text-black' value="Lunch">Lunch</option>
        <option className='text-black' value="Dinner">Dinner</option>
      </select>
      <div className='flex gap-5'>
        <button className='px-2 py-3 cursor-pointer bg-amber-500 rounded-2xl w-1/4 hover:bg-amber-600 animate-pulse'>Update Recipe</button>
        <button onClick={DeleteHandler} className='px-2 py-3 cursor-pointer text-[#641111] bg-[#101010] outline-1 outline-[#641111] rounded-2xl w-1/4 hover:text-red-500 hover:outline-red-500'>Delete Recipe</button>
      </div>
    </form>
    </div>
  )
}

export default RecipeUpdate