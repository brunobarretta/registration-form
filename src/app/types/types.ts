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
  pix?: boolean,
  credito?: boolean,
  boleto?: boolean,
  multa?: boolean,
  valorMulta?: string,
  juros?: boolean
}
  
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
export const COMPLETE_FORM = 'COMPLETE_FORM';

export interface UpdateFormDataAction {
  type: typeof UPDATE_FORM_DATA; 
  payload: FormState;
}

export interface CompleteFormAction {
  type: typeof COMPLETE_FORM;
  payload: FormState;
}

export type FormActionTypes = UpdateFormDataAction | CompleteFormAction;