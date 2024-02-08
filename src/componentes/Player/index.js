import './Player.css';
import { IoCloseCircle } from "react-icons/io5";


const Player = ({player, corDeFundo, aoDeletar}) => 
{
    const fundoDoCard = {backgroundColor: corDeFundo};
    return(

        <div className='colaborador'>
            <IoCloseCircle size={25} className='deletar'onClick={() => aoDeletar(player.id)}/>
            <div className='cabecalho' style={fundoDoCard}>
                <img src={player.imagem} alt={player.nome} />
            </div>
            <div className='rodape'>
                <h4>{player.nome}</h4>
                <h5>{player.funcao}</h5>
            </div>
        </div>
    )
}

export default Player;