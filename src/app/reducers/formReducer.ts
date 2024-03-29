import { FormActionTypes, FormState } from "../types/types";

const initialState: FormState = {
  profissional: '',
  banco: '',
  tipoConta: '',
  agencia: '',
  contaComDigito: '',
  tipoPessoa: '',
  documento: '',
  telefone: '',
  nomeCompleto: '',
  cep: '',
  estado: '',
  cidade: '',
  endereco: '',
  numero: '',
};

const formReducer = (state = initialState, action: FormActionTypes): FormState => {

  switch (action.type) {

    case 'UPDATE_FORM_DATA':
      console.log(action.type)
      console.log(action.payload)
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;