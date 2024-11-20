import './App.css';
import InfoCard from './components/infoCard/infoCard'; 
import Contador from './components/useState/Contador';
//import HobbyList from './components/Hobby/HobbyList';
import Hobbylist1 from './components/Hobby/Hobbylist1';
import TextoControlado from './components/useState/TextoControlado';

function App() {
  return (
    <div className="App">
      <p>exercicio 1</p>
            <InfoCard title="Título" description="Aqui vai a descrição"  /> 
      <p>Exercicio 2</p>
      <Hobbylist1 hobbies={['Criar (Desenhar, Programar, Escrever e artesanatos)','Jogar','Assistir series e animes']}></Hobbylist1>

      <p>Exercicio 3</p>
            <Contador/>
      <p>Exercicio 4</p>
      <TextoControlado/>
     
    </div>
  );
}

export default App;