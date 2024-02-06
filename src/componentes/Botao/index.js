import './Botao.css';

const Botao = (props) => 
{
    return(
        <div className='centraliza'>
            <button className='btn'>{props.children}</button>
        </div>
    )
}

export default Botao;