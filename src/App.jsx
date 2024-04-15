
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './Layouts/Navbar'
import Home from './Pages/Home'
import AllTask from './Pages/AllTask';
import NewTask from './Pages/NewTask';
import EditTask from './Pages/EditTask'
function App() {

  return (
    <>
   <BrowserRouter>
   <NavBar/>
<Routes>|
<Route path ='/' element={<Home/>}/>
<Route path ='/alltask' element={<AllTask/>}/>
<Route path ='/newtask' element={<NewTask/>}/>
<Route path ='/edittask' element={<EditTask/>}/>



</Routes>
   </BrowserRouter>
    </>
  )
}

export default App
