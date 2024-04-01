import React, { useEffect } from 'react';
import { Button, ButtonContainer, ButtonIcon, CancelButton, FormContainer, Icon, Info, Input, Label, MessageInfo, Row, Select, SelectContainer, SubTitle } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldErrors, useForm } from 'react-hook-form';
import { z } from 'zod';
import { updateFormData } from '@/app/actions/formActions';
import { TfiPlus } from "react-icons/tfi";

const schema = z.object({
  profissional: z.string().nonempty(),
  marcacaoDinamica: z.string().optional(),
  mensagemEmail: z.string().optional()
});

interface FieldStep2Props {
  onNext: () => void;
  onClose: () => void;
  setErrors: (errors: FieldErrors) => void;
}

const FieldStep2: React.FC<FieldStep2Props> = ({ onNext, onClose, setErrors }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state:any) => state.data.form);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue('profissional', formData.profissional);
    setValue('marcacaoDinamica', formData.marcacaoDinamica)
    setValue('mensagemEmail', formData.mensagemEmail)
  }, [formData]);
  
  const onSubmit = (formData: any) => {
    dispatch(updateFormData(formData));
    onNext();
  };

  useEffect(() => {
    setErrors(errors)
  }, [errors])

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
    <SelectContainer>
      <Label>
        Marcação dinâmica:
        <Select {...register('marcacaoDinamica')} hasError={!!errors.marcacaoDinamica}>
          <option value="" disabled selected>--Selecione--</option>
          <option value="marcacao1">Marcação 1</option>
          <option value="marcacao2">Marcação 2</option>
          <option value="marcacao3">Marcação 3</option>
        </Select>
      </Label>
      <ButtonContainer>
        <ButtonIcon type='button' onClick={() => {}}>
          <Icon>{<TfiPlus />}</Icon>
          Inserir
        </ButtonIcon>
      </ButtonContainer>
    </SelectContainer>
    <Label>
      Conteúdo da mensagem: 
      <Input type="text" placeholder='Digite aqui' {...register('mensagemEmail')}/>
    </Label>
    <Row>
      <CancelButton onClick={onClose}>Cancelar</CancelButton>
      <Button type="submit">Próximo</Button>
    </Row>
  </FormContainer>
  );
};

export default FieldStep2;