import React, {Component} from 'react'

class ListaContatos extends Component{
    render(){
        return(
            <div>
                <h1>Lista</h1>
                <ul style={{listStyleType:'none', padding:'0'}}>
                    {this.props.contatos.map(contato => (
                        <li key={contato.nome}>
                            <h4>{contato.nome}</h4>
                            <p>{contato.idade}</p>
                            <button onClick={() => this.props.onDeleteContato(contato)}>Excluir</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ListaContatos