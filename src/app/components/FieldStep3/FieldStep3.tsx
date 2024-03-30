import { completeForm, updateFormData } from '@/app/actions/formActions';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { string, z } from 'zod';
import { Button, CancelButton, CheckboxContainer, CheckboxInput, CheckboxLabel, CheckboxTitle, Divider, FlexItem, FormContainer, Info, InputMasked, Label, MessageInfo, Row, Select, SubTitle } from './styles';


const schema = z.object({
  profissional: z.string(),
  pix: z.boolean().optional(),
  credito: z.boolean().optional(),
  boleto: z.boolean().optional(),
  multa: z.boolean().optional(),
  valorMulta: string().optional(),
  juros: z.boolean().optional()
})

interface FieldStep3Props {
  onPrevious: () => void;
  onFinish: () => void;
}

const FieldStep3: React.FC<FieldStep3Props> = ({ onPrevious, onFinish }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state:any) => state.data.form);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue('profissional', formData.profissional);
  }, [formData]);
  
  const onSubmit = async (formData: any) => {
    await dispatch(completeForm(formData));
    onFinish();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
    <Label>
      Profissional: *
      <Select {...register('profissional')} disabled hasError={!!errors.profissional}>
        <option value="profissional1">Profissional 1</option>
        <option value="profissional2">Profissional 2</option>
        <option value="profissional3">Profissional 3</option>
      </Select>
    </Label>
    <SubTitle>Forma de pagamento da cobrança</SubTitle>
    <Info>
      <MessageInfo>
        Escolha quais as opções de pagamento que estarão disponíveis para o seu cliente no link das mensagens de cobrança
      </MessageInfo>
    </Info>
    <CheckboxContainer>
      <CheckboxTitle>Disponibilizar meios de pagamento: *</CheckboxTitle>
      <CheckboxLabel>
        <CheckboxInput {...register('pix')} type="checkbox" />
        Pix
      </CheckboxLabel>
      <CheckboxLabel>
        <CheckboxInput {...register('credito')} type="checkbox" />
        Cartão de crédito
      </CheckboxLabel>
      <CheckboxLabel>
        <CheckboxInput {...register('boleto')} type="checkbox" />
        Boleto Bancário
      </CheckboxLabel>
    </CheckboxContainer>
    <Divider />
    <CheckboxContainer>
      <CheckboxTitle>Cobrar multas e juros para todos os boletos após o vencimento</CheckboxTitle>
      <CheckboxLabel>
        <CheckboxInput {...register('multa')} type="checkbox"/>
        Cobrar multa
      </CheckboxLabel>
      <FlexItem>
        <Label>
          Valor da multa em %:
          <InputMasked mask="99,99%" maskChar="_" {...register('valorMulta')} hasError={!!errors.valorMulta} />
        </Label>
      </FlexItem>
      <CheckboxLabel>
        <CheckboxInput {...register('juros')} type="checkbox" />
        Cobrar juros por dia de atraso (valor 1% ao mês)
      </CheckboxLabel>
    </CheckboxContainer>
    <Row>
      <CancelButton onClick={onPrevious}>Cancelar</CancelButton>
      <Button type="submit">Próximo</Button>
    </Row>
  </FormContainer>
  );
};

export default FieldStep3;