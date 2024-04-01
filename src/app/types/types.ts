export interface FormProps {
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
  marcacaoDinamica?: string,
  mensagemEmail?: string,
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
  payload: FormProps;
}

export interface CompleteFormAction {
  type: typeof COMPLETE_FORM;
  payload: FormProps;
}

export type FormActionTypes = UpdateFormDataAction | CompleteFormAction;