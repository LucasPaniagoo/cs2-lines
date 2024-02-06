import './CampoTexto.css';

const CampoTexto = (props) => {
    
    const aoMudar = (evento) => 
    {
        props.aoAlterado(evento.target.value);
    }

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input onChange={aoMudar} value={props.valor} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;