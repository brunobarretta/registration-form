import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, FlexItem, FormContainer, Input, Label, Row, Select, Warning } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '@/app/actions/formActions';


const schema = z.object({
  profissional: z.string().nonempty(),
  banco: z.string().nonempty(),
  tipoConta: z.string().nonempty(),
  agencia: z.string().nonempty(),
  contaComDigito: z.string().nonempty(),
  tipoPessoa: z.string().nonempty(),
  documento: z.string().nonempty(),
  telefone: z.string().nonempty(),
  nomeCompleto: z.string().nonempty(),
  cep: z.string().nonempty(),
  estado: z.string().nonempty(),
  cidade: z.string().nonempty(),
  endereco: z.string().nonempty(),
  numero: z.string().nonempty(),
});


interface FieldStep1Props {
  onNext: () => void;
}

const FieldStep1: React.FC<FieldStep1Props> = ({ onNext }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state:any) => state.form);
  const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue('profissional', formData.profissional);
    setValue('banco', formData.banco);
    setValue('tipoConta', formData.tipoConta)
    setValue('agencia', formData.agencia)
    setValue('contaComDigito', formData.contaComDigito)
    setValue('tipoPessoa', formData.tipoPessoa)
    setValue('documento', formData.documento)
    setValue('telefone', formData.telefone)
    setValue('nomeCompleto', formData.nomeCompleto)
    setValue('cep', formData.cep)
    setValue('estado', formData.estado)
    setValue('cidade', formData.cidade)
    setValue('endereco', formData.endereco)
    setValue('numero', formData.numero)
  }, [formData]);

  const tipoPessoa = watch('tipoPessoa');

  const onSubmit = (formData: any) => {
    dispatch(updateFormData(formData));
    onNext();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Warning>

      </Warning>
      <Label>
        Profissional:
        <Select {...register('profissional')}>
          <option value="profissional1">Profissional 1</option>
          <option value="profissional2">Profissional 2</option>
          <option value="profissional3">Profissional 3</option>
        </Select>
      </Label>
      <Row>
        <FlexItem>
          <Label>
            Banco:
            <Select {...register('banco')}>
              <option value="banco1">Banco 1</option>
              <option value="banco2">Banco 2</option>
              <option value="banco3">Banco 3</option>
            </Select>
          </Label>
        </FlexItem>
        <FlexItem>
          <Label>
            Tipo de conta:
            <Select {...register('tipoConta')}>
              <option value="conta1">Conta 1</option>
              <option value="conta2">Conta 2</option>
              <option value="conta3">Conta 3</option>
            </Select>
          </Label>
        </FlexItem>
      </Row>
      <Row>
        <FlexItem>
          <Label>
            Agência:
            <Select {...register('agencia')}>
              <option value="agencia1">Agência 1</option>
              <option value="agencia2">Agência 2</option>
              <option value="agencia3">Agência 3</option>
            </Select>
          </Label>
        </FlexItem>
        <FlexItem>
          <Label>
            Conta com dígito:
            <Input type="number" {...register('contaComDigito')} />
          </Label>
        </FlexItem>
      </Row>
      <Row>
        <FlexItem>
          <Label>
            Tipo de pessoa:
            <Select {...register('tipoPessoa')}>
              <option value="cpf">CPF</option>
              <option value="cnpj">CNPJ</option>
            </Select>
          </Label>
        </FlexItem>
        <FlexItem>
          <Label>
            Documento:
            <Input type={tipoPessoa === 'cpf' ? 'text' : 'number'} {...register('documento')} />
          </Label>
        </FlexItem>
        <FlexItem>
          <Label>
            Telefone:
            <Input type="tel" {...register('telefone')} />
          </Label>
        </FlexItem>
      </Row>
      <Label>
        Nome completo:
        <Input type="text" {...register('nomeCompleto')} />
      </Label>
      <Row>
        <FlexItem>
          <Label>
            CEP:
            <Input type="text" {...register('cep')} />
          </Label>
        </FlexItem>
        <FlexItem>
          <Label>
            Estado:
            <Select {...register('estado')}>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
            </Select>
          </Label>
        </FlexItem>
        <FlexItem>
          <Label>
            Cidade:
            <Input type="text" {...register('cidade')} />
          </Label>
        </FlexItem>
      </Row>
      <Row>
        <FlexItem>
          <Label>
            Endereço:
            <Input type="text" {...register('endereco')} />
          </Label>
        </FlexItem>
        <FlexItem>
          <Label>
            Número:
            <Input type="text" {...register('numero')} />
          </Label>
        </FlexItem>
      </Row>
      <Button type="submit">Próximo</Button>
    </FormContainer>
  );
};

export default FieldStep1;