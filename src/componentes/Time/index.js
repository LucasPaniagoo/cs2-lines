import Player from '../Player';
import './Time.css';

const Time = (props) => 
{
    const cssFundo = {backgroundColor: props.corSecundaria};
    const cssTitulo = {color: props.corPrimaria};
    return(
        props.players.length > 0 &&
        <section className='time' style={cssFundo}>
            <h3 style={cssTitulo}>{props.nome}</h3>
            <div className='players'>
                {props.players.map( player => <Player
                key={player.nome}
                nome={player.nome}
                funcao={player.funcao}
                imagem={player.imagem}
                corDeFundo={props.corPrimaria}
                />)}
            </div>
            
        </section>
    )
}

export default Time;