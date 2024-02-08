import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
  const [time, setTime] = useState(
  [
    {
      id: uuidv4(),
      nome: 'Fluxo',
      cor: '#5f408c'
    },
    {
      id: uuidv4(),
      nome: 'W7M',
      cor: '#eb0045'
    },
    {
      id: uuidv4(),
      nome: 'Red Canids',
      cor: '#ee334d'
    },
    {
      id: uuidv4(),
      nome: 'MIBR',
      cor: '#2a4f7d'
    },
    {
      id: uuidv4(),
      nome: 'Pain',
      cor: '#000000'
    },
    {
      id: uuidv4(),
      nome: 'Furia',
      cor: '#f2e1b6'
    },
    {
      id: uuidv4(),
      nome: 'Imperial',
      cor: '#76c261'
    },
    {
      id: uuidv4(),
      nome: 'Legacy',
      cor: '#eed040'
    }
  ])
  const [players, setPlayers] = useState([]);
  const adicionarPlayer = (player) => 
  {
    const novoPlayer = {...player, id: uuidv4()};
    setPlayers([...players, novoPlayer]);
  }

  function deletarPlayer(playerId)
  {
    setPlayers(players => players.filter(player => player.id !== playerId));
  }

  function mudarCorTime(cor, id) 
  {
    setTime(time.map(time => 
      {
        if (time.id === id) 
        {
          time.cor = cor;
        }
        return time;
    }))  
  }
  function cadastrarOrg(novaOrg) 
  {
    setTime([...time, {...novaOrg, id: uuidv4}]);
  }
  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarOrg={cadastrarOrg}
        times={time.map(time => time.nome)} 
        cadastrarPlayer={player => adicionarPlayer(player)} 
        
        />
      {time.map((time, indice) => 
      <Time 
        key={indice} 
        time={time}
        players={players.filter(player => player.organizacao === time.nome)}
        aoDeletar={deletarPlayer}
        mudarCor={mudarCorTime}
      /> )}
      <Rodape />
      
    </div>
  );
}

export default App;
