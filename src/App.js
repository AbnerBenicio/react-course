import './App.css';
import SayMyName from './components/SayMyName';
import People from './components/People';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <Frase />
      <Frase />
      <SayMyName nome="Abner"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <People name= "Abner" age= "20" job= "Estudante" img= "https://via.placeholder.com/150"/>

      <List />
    </div>
  );
}

export default App;
