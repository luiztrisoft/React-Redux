import {createStore} from 'redux'
import reducers from './app/reducers/index'
export default createStore(reducers)
//Função de juntar todos os reducers