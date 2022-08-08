import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="bg-gray-100 font-sans w-full h-full items-center justify-center">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;