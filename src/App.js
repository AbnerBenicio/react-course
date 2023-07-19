import { useState } from 'react';
import './App.css';
import SeuNome from './components/seuNome';
import Saudacao from './components/Saudacao';

function App() {

  const [name, setName] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setName={setName}/>
      <Saudacao name={name}/>
    </div>
  );
}

export default App;
