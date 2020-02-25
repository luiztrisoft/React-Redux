import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../actions'

const Input = (props) => (
    <div>
        {props.label && <label>{props.label}</label>}
        <input
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            type={props.type || "text"} />
    </div>
)

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                nome: "",
                email: "",
                telefone: "",
                cpf: ""
            },
            mostrarForm: false
        }
    }

    mostrarForm = () => {
        this.setState({ mostrarForm: !this.state.mostrarForm })
    }

    onChange = (field, ev) => {
        const { form } = this.state;
        form[field] = ev.target.value;
        this.setState({ form });
    }

    handleSubmit = () => {
        console.log("submit")
        this.mostrarForm();
    }

    renderFormulario() {
        const { form } = this.state
        return (
            <div className="Formulario">
                <div>
                    <Input
                        value={form.nome}
                        onChange={(ev) => this.onChange('nome', ev)}
                        label={"Nome"}/>
                    <Input
                        value={form.telefone}
                        onChange={(ev) => this.onChange('telefone', ev)}
                        label={"Telefone"} />
                    <Input
                        value={form.cpf}
                        onChange={(ev) => this.onChange('cpf', ev)}
                        label={"CPF"}/>
                    <Input
                        value={form.email}
                        onChange={(ev) => this.onChange('email', ev)}
                        label={"Email"}
                        type={"email"}/>
                    <div>
                        <button onClick={this.handleSubmit} className="botao botao-verde">
                            Salvar
						</button>
                        <button onClick={this.mostrarForm} className="botao botao-branco">
                            Cancelar
						</button>
                    </div>
                </div>
            </div>
        );
    }
    
    renderBotao(){
		return (
			<div className="Formulario">
				<button onClick={this.mostrarForm} className="botao botao-azul">
					+ ADICIONAR CLIENTE
				</button>
			</div>
		)
	}

	render(){
		return this.state.mostrarForm ? this.renderFormulario() : this.renderBotao();
	}
}

export default connect(null, actions)(Formulario);