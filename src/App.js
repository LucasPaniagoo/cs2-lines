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
      cor: '#E7DEF3'
    },
    {
      id: uuidv4(),
      nome: 'W7M',
      cor: 'FFEAF0'
    },
    {
      id: uuidv4(),
      nome: 'Red Canids',
      cor: '#FFEBEE'
    },
    {
      id: uuidv4(),
      nome: 'MIBR',
      cor: '#fffdfb'
    },
    {
      id: uuidv4(),
      nome: 'Pain',
      cor: '#FFE0E5'
    },
    {
      id: uuidv4(),
      nome: 'Furia',
      cor: '#999DA6'
    },
    {
      id: uuidv4(),
      nome: 'Imperial',
      cor: '#EBF6E8'
    },
    {
      id: uuidv4(),
      nome: 'Legacy',
      cor: '#FFFFFF'
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
  return (
    <div className="App">
      <Banner />
      <Formulario times={time.map(time => time.nome)} cadastrarPlayer={player => adicionarPlayer(player)} />
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
