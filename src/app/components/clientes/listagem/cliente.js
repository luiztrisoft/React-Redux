import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class Cliente extends React.Component{

    state = {
        iniciouExclusao: false
    }

    excluirCliente = () =>{
        const {iniciouExclusao} = this.state;
        if(!iniciouExclusao) return this.setState({iniciouExclusao: true});
        this.props.removeCliente(this.props.cliente.id);
    }

    alterarCliente=()=>{
        this.props.setClienteParaAlterar(this.props.cliente)
    }

    render(){
        const {iniciouExclusao} = this.state;
        const {cliente} = this.props;
        return(
            <tr>
                <td>{cliente.nome}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.email}</td>
                <td>{cliente.cpf}</td>
                <td
                    onClick={this.alterarCliente}
                    style={{cursor: "pointer"}}>
                    {"Alterar"}
                </td>
                <td
                    onClick={this.excluirCliente}
                    style={{cursor: "pointer"}}>
                    {iniciouExclusao ? "Certeza?" : "Excluir"}
                </td>
            </tr>
        );
    }
}

export default connect(null, actions)(Cliente)