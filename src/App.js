import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hader from './components/Hader';
import Cart from './components/Cart';
import Cartdetails from './components/Cartdetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Hader/>
      <Routes>
        <Route path='/' element={<Cart/>}/>
        <Route path='/cart/:id' element={<Cartdetails/>}/>
      </Routes>
    </>
  );
}

export default App;
