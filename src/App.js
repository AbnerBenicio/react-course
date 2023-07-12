import './App.css';
import SayMyName from './components/SayMyName';
import People from './components/People';
import Frase from './components/Frase';
import List from './components/List';
import Event from './components/Event';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Event numero={1}/>
      <Event numero={2}/>
      <Form />
      <List />
      
    </div>
  );
}

export default App;
