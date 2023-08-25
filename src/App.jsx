
import Navbar from './components/Navbar'
import Home from './pages/home'
import Footer from './components/Footer'
import TopAnime from './pages/TopAnime'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Videos from './pages/Videos';

function App() {

  return (
    <div className="flex flex-col w-screen items-center justify-center">
      <div className='wrapper text-sm container w-9/12 max-sm:w-screen'>

      <BrowserRouter>
      <Navbar/>
        
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/topanime'} element={<TopAnime/>}/>
            <Route path={'/videos'} element={<Videos/>}/>
          </Routes>
        
      </BrowserRouter>
      
      </div>
      <Footer/>

    </div>
  )
}

export default App
