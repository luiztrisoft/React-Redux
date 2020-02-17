import {combineReducers} from 'redux'
import clientesReducer from './clientesReducer';

//Adicionamos todos os nossos reducers
const rootReducer = combineReducers({
    clientes: clientesReducer
})

export default rootReducer