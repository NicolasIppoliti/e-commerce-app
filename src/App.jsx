import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App bg-white font-sans">
      <NavBar/>
      <ItemListContainer
        greeting='Bienvenido a mi pagina web'/>
    </div>
  );
}

export default App;