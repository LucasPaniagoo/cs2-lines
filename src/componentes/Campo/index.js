import './Campo.css';

const Campo = ({type = 'text', label, valor, required, placeholder, aoAlterado}) => {
    
    const aoMudar = (evento) => 
    {
        aoAlterado(evento.target.value);
    }

    return(
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                onChange={aoMudar} 
                value={valor} 
                type={type} 
                required={required} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo;