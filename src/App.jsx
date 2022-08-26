import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from "react-router-dom";
import ItemDetail from './components/ItemDetail/ItemDetail';
import UserForm from './components/UserForm/UserForm';
import {CartContextProvider} from './CartContext';
import CartView from './components/CartView/CartView';

function App() {
  return (
    <CartContextProvider>
      <div className="bg-gray-100 font-sans w-full h-full items-center justify-center">
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/products' element={<ItemListContainer/>}/>
          <Route exact path='/products/:id' element={<ItemDetail/>}/>
          <Route exact path='/category/:category' element={<ItemListContainer/>}/>
          <Route exact path='/contact' element={<UserForm/>}/>
          <Route exact path='/cart' element={<CartView/>}/>
        </Routes>
      </div>
    </CartContextProvider>
  );
}

export default App;