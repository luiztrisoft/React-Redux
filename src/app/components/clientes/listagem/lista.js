import React from 'react'

const Cliente = (cliente) =>(
    <div>
        <td>{cliente.nome}</td>
        <td>{cliente.telefone}</td>
        <td>{cliente.email}</td>
        <td>{cliente.cpf}</td>
    </div>
)

export default class ListaClientes extends React.Component{
    render(){
        const {data} = this.props
        return (
            <div className="ListaClientes">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Email</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((cliente, index) =>(
                                <Cliente cliente={cliente} key={index } /> 
                            ))
                        }
                    </tbody>
                </table>
               
            </div>
        )
    }
}