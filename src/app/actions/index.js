import {GET_CLIENTES,ADD_CLIENTE,UPDATE_CLIENTE, REMOVE_CLIENTE} from './types';

const data = [
    {
        id: 1, 
        nome: "Joao", 
        cpf: "111.222.333-45", 
        telefone: "(31)555-4444", 
        email: "joao@gmail.com",
        criadoEm: new Date().getTime(),
        atualizadoEm: new Date().getTime()
    }
];

export const getClientes = () => ({type: GET_CLIENTES});

export const addCliente = (cliente) => ({ type: ADD_CLIENTE});

export const updateCliente = (id, cliente) => ({ type: UPDATE_CLIENTE});

export const removeCliente = (id) => ({ type: REMOVE_CLIENTE});