import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ProductsList from './components/ProductsList/ProductsList';

function App() {
  return (
    <div className="bg-gray-100 font-sans w-full h-full items-center justify-center">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;