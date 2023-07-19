import './App.css';
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ["React", "Vue", "Angular"]

  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <OutraLista lista={meusItens}/>
      
    </div>
  );
}

export default App;
