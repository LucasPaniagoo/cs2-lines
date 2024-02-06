import './Player.css';

const Player = ({nome, funcao, imagem, corDeFundo}) => 
{
    const fundoDoCard = {backgroundColor: corDeFundo};
    return(

        <div className='colaborador'>
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