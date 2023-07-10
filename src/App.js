import './App.css';
import SayMyName from './components/SayMyName';
import People from './components/People';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <SayMyName nome="Abner"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <People name= "Abner" age= "20" job= "Estudante" img= "https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
