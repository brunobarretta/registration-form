import React from 'react';
import { AnswerItem, AnswerList, Card, Title } from './styles';
import { FormState } from '@/app/types/types';

interface FinishedFormsListProps {
  finishedForms: FormState[];
}

const FinishedFormsList = ({ finishedForms }:FinishedFormsListProps) => {
    return (
      <>
        {finishedForms.map((form, index) => (
          <Card key={index}>
            <Title>Respostas do Formulário {index + 1}</Title>
            <AnswerList>
              <AnswerItem>Profissional: {form.profissional}</AnswerItem>
              <AnswerItem>Banco: {form.banco}</AnswerItem>
              <AnswerItem>Tipo de Conta: {form.tipoConta}</AnswerItem>
              <AnswerItem>Agência: {form.agencia}</AnswerItem>
              <AnswerItem>Conta com Dígito: {form.contaComDigito}</AnswerItem>
              <AnswerItem>Tipo de Pessoa: {form.tipoPessoa}</AnswerItem>
              <AnswerItem>Documento: {form.documento}</AnswerItem>
              <AnswerItem>Telefone: {form.telefone}</AnswerItem>
              <AnswerItem>Nome Completo: {form.nomeCompleto}</AnswerItem>
              <AnswerItem>CEP: {form.cep}</AnswerItem>
              <AnswerItem>Estado: {form.estado}</AnswerItem>
              <AnswerItem>Cidade: {form.cidade}</AnswerItem>
              <AnswerItem>Endereço: {form.endereco}</AnswerItem>
              <AnswerItem>Número: {form.numero}</AnswerItem>
              <AnswerItem>Pix: {form.pix ? 'Sim' : 'Não'}</AnswerItem>
              <AnswerItem>Crédito: {form.credito ? 'Sim' : 'Não'}</AnswerItem>
              <AnswerItem>Boleto: {form.boleto ? 'Sim' : 'Não'}</AnswerItem>
              <AnswerItem>Multa: {form.multa ? 'Sim' : 'Não'}</AnswerItem>
              <AnswerItem>Valor da Multa: {form.valorMulta}</AnswerItem>
              <AnswerItem>Juros: {form.juros ? 'Sim' : 'Não'}</AnswerItem>
            </AnswerList>
          </Card>
        ))}
      </>
    );
  };
  
  export default FinishedFormsList;