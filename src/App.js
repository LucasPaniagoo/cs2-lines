import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
  const times = 
  [
    {
      nome: 'Fluxo',
      corPrimaria: '#5f408c',
      corSecundaria: '#E7DEF3'
    },
    {
      nome: 'W7M',
      corPrimaria: '#eb0045',
      corSecundaria: 'FFEAF0'
    },
    {
      nome: 'Red Canids',
      corPrimaria: '#ee334d',
      corSecundaria: '#FFEBEE'
    },
    {
      nome: 'MIBR',
      corPrimaria: '#2a4f7d',
      corSecundaria: '#fffdfb'
    },
    {
      nome: 'Pain',
      corPrimaria: '#000000',
      corSecundaria: '#FFE0E5'
    },
    {
      nome: 'Furia',
      corPrimaria: '#f2e1b6',
      corSecundaria: '#999DA6'
    },
    {
      nome: 'Imperial',
      corPrimaria: '#76c261',
      corSecundaria: '#EBF6E8'
    },
    {
      nome: 'Legacy',
      corPrimaria: '#eed040',
      corSecundaria: '#FFFFFF'
    }
  ]
  const [players, setPlayers] = useState([]);
  const adicionarPlayer = (player) => 
  {
    console.log(player);
    setPlayers([...players, player]);
  }

  function deletarPlayer()
  {
    console.log('Player deletado');
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} cadastrarPlayer={player => adicionarPlayer(player)} />
      {times.map((time, indice) => 
      <Time 
        key={indice} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        players={players.filter(player => player.organizacao === time.nome)}
        aoDeletar={deletarPlayer}
      /> )}
      <Rodape />
      
    </div>
  );
}

export default App;
