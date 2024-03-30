import React, { useEffect } from 'react';
import { Button, CancelButton, FormContainer, Info, Label, MessageInfo, Row, Select, SubTitle } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { updateFormData } from '@/app/actions/formActions';

const schema = z.object({
  profissional: z.string().nonempty(),
});

interface FieldStep2Props {
  onNext: () => void;
  onPrevious: () => void;
}

const FieldStep2: React.FC<FieldStep2Props> = ({ onNext, onPrevious }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state:any) => state.data.form);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue('profissional', formData.profissional);
  }, [formData]);
  
  const onSubmit = (formData: any) => {
    dispatch(updateFormData(formData));
    onNext();
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
    <SubTitle>Enviar cobrança por e-mail:</SubTitle>
    <Info>
      <MessageInfo>
        Esse é a mensagem por e-mail que seus clientes irão receber. Clique no campo de texto para editar o conteúdo da mensagem e depois siga para o próximo passo.
      </MessageInfo>
    </Info>
    <Row>
      <CancelButton onClick={onPrevious}>Cancelar</CancelButton>
      <Button type="submit">Próximo</Button>
    </Row>
  </FormContainer>
  );
};

export default FieldStep2;