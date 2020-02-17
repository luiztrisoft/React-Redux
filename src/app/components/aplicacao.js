import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import Listagem from './clientes/listagem';

 class Aplicacao extends React.Component{
    render(){
               
        return(
            <div className="Aplicacao">
                <Listagem/>
            </div>
        )
    }
}

export default connect(null, actions)(Aplicacao)