import React, { useEffect } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, CancelButton, FlexItem, FormContainer, Input, InputMasked, Label, Row, Select, TitleWarning, Warning, WarningLi, WarningUl } from './styles';
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
  onClose: () => void;
  setErrors: (errors: FieldErrors) => void;
}

const FieldStep1: React.FC<FieldStep1Props> = ({ onNext, onClose, setErrors }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state:any) => state.data.form);
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

  useEffect(() => {

    setErrors(errors)

  }, [errors])

  const tipoPessoa = watch('tipoPessoa');

  const onSubmit = (formData: any) => {
    dispatch(updateFormData(formData));
    onNext();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Warning>
        <TitleWarning>
          Atenção!!! Verifique atentamente a cada dado preenchido no cadastro de sua conta.
        </TitleWarning>
        <WarningUl>
          <WarningLi>Caso queira cadastrar uma conta de banco CNPJ, verifique se a sua conta corrente é CNPJ e preencha o CPF correto do responsável da conta.</WarningLi>
          <WarningLi>O preenchimento incorreto das informações pode trazer transtornos no momento da transferência do valor para essa conta corrente.</WarningLi>
          <WarningLi>Se possível preencha com calma para não ocorrer erros.</WarningLi>
        </WarningUl>
      </Warning>
      <Label>
        Profissional: *
        <Select {...register('profissional')} disabled hasError={!!errors.profissional}>
          <option value="profissional1">Profissional 1</option>
          <option value="profissional2">Profissional 2</option>
          <option value="profissional3">Profissional 3</option>
        </Select>
      </Label>
      <Row>
        <FlexItem>
          <Label>
            Banco: *
            <Select {...register('banco')} hasError={!!errors.banco}>
              <option value="banco1">Banco do Brasil</option>
              <option value="banco2">Bradesco</option>
              <option value="banco3">Caixa Econômica</option>
              <option value="banco1">Itáu</option>
              <option value="banco2">Inter</option>
              <option value="banco3">Santader</option>
            </Select>
          </Label>
        </FlexItem>
        <FlexItem>
          <Label>
            Tipo de conta: *
            <Select {...register('tipoConta')} hasError={!!errors.tipoConta}>
              <option value="conta1">Conta corrente</option>
              <option value="conta2">Poupança</option>
            </Select>
          </Label>
        </FlexItem>
      </Row>
      <Row>
        <FlexItem>
        <Label>
            Agência: *
            <Input type="number" {...register('agencia')} hasError={!!errors.agencia} />
          </Label>
        </FlexItem>
        <FlexItem>
          <Label>
            Conta com dígito: *
            <Input type="number" {...register('contaComDigito')} hasError={!!errors.contaComDigito}  />
          </Label>
        </FlexItem>
      </Row>
      <Row>
        <FlexItem>
          <Label>
            Tipo de pessoa: *
            <Select {...register('tipoPessoa')} hasError={!!errors.tipoPessoa}>
              <option value="cpf">CPF</option>
              <option value="cnpj">CNPJ</option>
            </Select>
          </Label>
        </FlexItem>
        <FlexItem>
          <Label>
            Documento: *
            {tipoPessoa === 'cpf' ? (
              <InputMasked mask="999.999.999-99" {...register('documento')} hasError={!!errors.documento} />
            ) : (
              <InputMasked mask="99.999.999/9999-99" {...register('documento')} hasError={!!errors.documento} />
            )}
          </Label>
        </FlexItem>
        <FlexItem>
          <Label>
            Telefone: *
            <InputMasked mask="(99)99999-9999" {...register('telefone')} hasError={!!errors.telefone} />
          </Label>
        </FlexItem>
      </Row>
      <Label>
        Nome completo: *
        <Input type="text" {...register('nomeCompleto')} hasError={!!errors.contaComDigito}  />
      </Label>
      <Row>
        <FlexItem>
          <Label>
            CEP: *
            <InputMasked mask="99999-999" {...register('cep')} hasError={!!errors.cep} />
          </Label>
        </FlexItem>
        <FlexItem>
          <Label>
            Estado: *
            <Select {...register('estado')} hasError={!!errors.estado}>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </Select>
          </Label>
        </FlexItem>
        <FlexItem>
          <Label>
            Cidade: *
            <Input type="text" {...register('cidade')} hasError={!!errors.cidade}  />
          </Label>
        </FlexItem>
      </Row>
      <Row>
        <FlexItem>
          <Label>
            Endereço: *
            <Input type="text" {...register('endereco')} hasError={!!errors.endereco} />
          </Label>
        </FlexItem>
        <FlexItem>
          <Label>
            Número: *
            <Input type="number" {...register('numero')} hasError={!!errors.numero}  />
          </Label>
        </FlexItem>
      </Row>
      <Row>
        <CancelButton onClick={onClose}>Cancelar</CancelButton>
        <Button type="submit">Próximo</Button>
      </Row>
    </FormContainer>
  );
};

export default FieldStep1;