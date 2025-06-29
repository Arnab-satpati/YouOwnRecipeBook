import Mainroutes from './components/routes/Mainroutes.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
    <div className='bg-black text-white min-h-screen scrollbar'>
      <Navbar/>
      <Mainroutes/>
      
    </div>
  )
}

export default App