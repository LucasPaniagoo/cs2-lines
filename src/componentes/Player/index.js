import './Player.css';
import { IoCloseCircle } from "react-icons/io5";


const Player = ({nome, funcao, imagem, corDeFundo, aoDeletar}) => 
{
    const fundoDoCard = {backgroundColor: corDeFundo};
    return(

        <div className='colaborador'>
            <IoCloseCircle size={25} className='deletar'onClick={aoDeletar}/>
            <div className='cabecalho' style={fundoDoCard}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{funcao}</h5>
            </div>
        </div>
    )
}

export default Player;