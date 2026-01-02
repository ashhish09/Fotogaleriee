
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Collectionpage from './pages/collectionpage.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className=' w-full h-screen bg-gray-950 text-white'>
       <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/collection' element={<Collectionpage />} />
       </Routes>

       <ToastContainer />

    </div>
  )
}

export default App
