import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute w-[48%] bg-transparent top-40 left-20">
        <h1 className="text-[1.5rem] bg-transparent text-[#878787]">Tired of Boring Meals?</h1>
        <h1 className="text-8xl w-[100%] font-semibold bg-transparent text-white ">What’s Cooking? Let AI Decide!</h1>
        <button onClick={()=>navigate('/askme')} className='px-3 py-3 mt-3 cursor-pointer text-lg bg-amber-500 rounded-2xl w-auto shadow-[0_0_20px_rgba(255,191,0,0.6)] hover:shadow-none transition-all duration-300'>🍳 Start Cooking with AI</button>

      </div>
      <img className='h-[100vh] w-[100%] object-contain pl-[23.5rem] ' src='assets/heroimg.png' alt="Delicious Burger" />
      {/* <div className="flex justify-center items-center relative h-auto ">
        <video autoPlay muted loop className="h-[auto] w item-center object-contain">
          <source src='/assets/ORBIT-5-01-LITE.mp4' type="video/mp4" />
        </video> 
        <div className="absolute bottom-[-1rem] h-[6rem] w-[100%] bg-black z-10"></div>
      </div> */}
    </div>
  )
}

export default Home