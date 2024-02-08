import './Player.css';
import { IoCloseCircle } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


const Player = ({player, corDeFundo, aoDeletar, aoFavoritar}) => 
{
    const fundoDoCard = {backgroundColor: corDeFundo};
    const propsFavorito = 
    {
        size:25,
        onClick: favoritar
    }
    function favoritar() 
    {
        aoFavoritar(player.id);
    }
    return(

        <div className='colaborador'>
            <IoCloseCircle size={25} className='deletar'onClick={() => aoDeletar(player.id)}/>
            <div className='cabecalho' style={fundoDoCard}>
                <img src={player.imagem} alt={player.nome} />
            </div>
            <div className='rodape'>
                <h4>{player.nome}</h4>
                <h5>{player.funcao}</h5>
                <div className='favoritar'>
                    {player.mvp
                        ? <FaStar {...propsFavorito} color='#F2D95C'/> 
                        : <CiStar {...propsFavorito} /> 
                    }
                </div>
            </div>
        </div>
    )
}

export default Player;