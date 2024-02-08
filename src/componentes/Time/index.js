import Player from '../Player';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = ({time, aoDeletar, mudarCor, players, aoFavoritar}) => 
{
    const cssFundo = {backgroundColor: hexToRgba(time.cor, 0.6)};
    const cssBorder = {borderBottomColor: time.cor};
    const handleDelete = (playerId, index) => {
        aoDeletar(playerId, index);
    }

    return(
        players.length > 0 &&
        <section className='time' style={cssFundo}>
            <input value={time.cor} onChange={evento => mudarCor(evento.target.value, time.id)} type="color" className='input-color' />
            <h3 style={cssBorder}>{time.nome}</h3>
            <div className='players'>
                {players.map( (player, indice) => {
                    return (
                        <Player
                            key={indice}
                            player={player}
                            corDeFundo={time.cor}
                            aoDeletar={() => handleDelete(player.id, indice)}
                            aoFavoritar={aoFavoritar}
                        />
                    );
                })}
            </div>
            
        </section>
    )
}

export default Time;