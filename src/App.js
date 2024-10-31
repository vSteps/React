import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
function App() {

  return (
    <div className="App">
      <SayMyName nome="Victor" />
      <Frase />
      <Pessoa 
       nome="Ryan"
       idade="23"
       profissao="Estudante de TADS"
       foto="https://cdn-icons-png.flaticon.com/128/149/149071.png" />
       <List />

    </div>
  );
}

export default App;
