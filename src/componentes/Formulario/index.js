import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';

const Formulario = (props) => 
{

    const [nome, setNome] = useState('');
    const [funcao, setFuncao] = useState('');
    const [imagem, setImagem] = useState('');
    const [organizacao, setOrganizacao] = useState('');

    const aoSalvar = (evento) =>
    {
        evento.preventDefault();
        props.cadastrarPlayer({
            nome: nome, 
            funcao: funcao,
            imagem: imagem,
            organizacao: organizacao
        })
        setNome('');
        setFuncao('');
        setImagem('');
        setOrganizacao('');
    }
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para adicionar um player</h2>
                <CampoTexto 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite o nome do player" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    required={true} 
                    label="Função" 
                    placeholder="Digite a função ingame do player" 
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}
                />
                <CampoTexto 
                    required={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    required={true} 
                    label="Organização" 
                    itens={props.times} 
                    valor={organizacao}
                    aoAlterado={valor => setOrganizacao(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;