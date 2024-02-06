import './ListaSuspensa.css'

const ListaSuspensa = (props) => 
{
    const aoMudar = (evento) =>
    {
        props.aoAlterado(evento.target.value);
    }
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={aoMudar} value={props.valor}>
                <option value="Escolha uma organização"></option>
                {props.itens.map(item => {
                    return <option key={item} >{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;