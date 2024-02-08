import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';

const Formulario = (props) => 
{

    const [nome, setNome] = useState('');
    const [funcao, setFuncao] = useState('');
    const [imagem, setImagem] = useState('');
    const [organizacao, setOrganizacao] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

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
                <Campo 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite o nome do player" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo 
                    required={true} 
                    label="Função" 
                    placeholder="Digite a função ingame do player" 
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}
                />
                <Campo 
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
            <form onSubmit={(evento) => 
                {
                    evento.preventDefault();
                    props.cadastrarOrg({nome: nomeTime, cor: corTime});
                }}>
                <h2>Preencha os dados para adicionar uma nova organização</h2>
                <Campo 
                    required
                    label="Nome" 
                    placeholder="Digite o nome da organização" 
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo 
                    required={true} 
                    type="color"
                    label="Cor" 
                    placeholder="Digite a cor da Organização" 
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar Nova Org
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;