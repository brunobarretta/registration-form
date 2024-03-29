export interface FormState {
  profissional: string;
  banco: string;
  tipoConta: string;
  agencia: string;
  contaComDigito: string;
  tipoPessoa: string;
  documento: string;
  telefone: string;
  nomeCompleto: string;
  cep: string;
  estado: string;
  cidade: string;
  endereco: string;
  numero: string;
}
  
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';

export interface UpdateFormDataAction {
  type: typeof UPDATE_FORM_DATA; 
  payload: FormState;
}

export type FormActionTypes = UpdateFormDataAction;