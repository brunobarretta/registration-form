import { FormActionTypes, FormState } from "../types/types";

export interface RootState {
  form: FormState;
  finishedForms: FormState[];
}

const initialState: RootState = {
  form: {
    profissional: 'profissional1',
    banco: 'banco1',
    tipoConta: 'conta1',
    agencia: '123',
    contaComDigito: '123',
    tipoPessoa: 'cpf',
    documento: '43066155889',
    telefone: '11999885533',
    nomeCompleto: 'sasa',
    cep: '12345678',
    estado: 'SP',
    cidade: 'sasa',
    endereco: 'fff',
    numero: '123',
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

      console.log(state.form)
      console.log(action.payload)
      const combinedForm: FormState = {
        ...state.form,
        ...action.payload,       
      };
      
      return {
        ...state,
        finishedForms: [...state.finishedForms, combinedForm],
      };

    default:
      return state;
  }

  
};

export default formReducer;