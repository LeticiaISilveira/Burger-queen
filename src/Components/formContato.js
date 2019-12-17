import React, {Component} from 'react'

class FormContato extends Component {
    state = {
        nome: '',
        idade: '' 
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {nome, idade} = this.state
        console.log('Novo contato', {nome, idade})
    }
    
    render(){
        const{nome, idade} = this.state
        return(
            <div>
                <h1>Novo Contato</h1>
                <form onSubmit={this.handleChange}> 
                    <div>
                        <input 
                        name='nome'
                        value={nome}
                        onChange={this.handleChange}
                        placeholder='Nome'
                        />
                        <input 
                        name='idade'
                        value={idade}
                        onChange={this.handleChange}
                        placeholder='Idade'
                        />
                        <button>Adicionar Contato</button>
                       
                    </div>
                </form>
            </div>
        )
    }
}

export default FormContato