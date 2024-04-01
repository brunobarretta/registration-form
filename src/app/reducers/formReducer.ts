import { FormActionTypes, FormProps } from "../types/types";

export interface RootState {
  form: FormProps;
  finishedForms: FormProps[];
}

const initialState: RootState = {
  form: {
    profissional: 'profissional1',
    banco: '',
    tipoConta: '',
    agencia: '',
    contaComDigito: '',
    tipoPessoa: 'cpf',
    documento: '',
    telefone: '',
    nomeCompleto: '',
    cep: '',
    estado: '',
    cidade: '',
    endereco: '',
    numero: '',
    marcacaoDinamica: '',
    mensagemEmail: '',
    pix: false,
    credito: false,
    boleto: false,
    multa: false,
    valorMulta: '',
    juros: false
  },
  finishedForms: [],
};

const formReducer = (state = initialState, action: FormActionTypes): RootState => {
  switch (action.type) {

    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        form: {...state.form, ...action.payload},
      };

    case 'COMPLETE_FORM':

      const combinedForm: FormProps = {
        ...state.form,
        ...action.payload,       
      };
      
      return {
        ...state,
        form: initialState.form,
        finishedForms: [...state.finishedForms, combinedForm],
      };

    default:
      return state;
  }

  
};

export default formReducer;