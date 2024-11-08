import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import {Archive} from './pages/Home/Archive'
import { Delete } from './pages/Delete';
import { Important } from './pages/Important';
function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/archive' element={<Archive/>}/>
    <Route path='/delete' element={<Delete/>}/>
    <Route path='/important' element={<Important/>}/>
   </Routes>

  );
}

export default App;
