'use client'
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import FieldStep1 from '../../components/FieldStep1/FieldStep1';
import FieldStep2 from '../../components/FieldStep2/FieldStep2';
import FieldStep3 from '../../components/FieldStep3/FieldStep3';
import ProgressBarComponent from '../../components/ProgressBar/ProgressBar';
import { Button, Container, FinishedContent, Header, Progress, SubTitle, Title } from './styles';
import { toast } from 'react-toastify';
import Toast from '../../components/Toast/Toast';
import { FieldErrors } from 'react-hook-form';
import { useSelector } from 'react-redux';
import FinishedFormsList from '../../components/FinishedFormList/FinishedFormList';

const FormModal = () => {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const finishedForms = useSelector((state:any) => state.data.finishedForms);

  const onNextStep = () => setCurrentStep(currentStep + 1);
  const onPreviousStep = () => setCurrentStep(currentStep - 1);
  const onCloseModal = () => {
    setCurrentStep(1);
    setOpen(false);
  };

  const onOpenModal = () => setOpen(true);

  const checkErrors = (errors:FieldErrors) => {
    const errorsLength = Object.entries(errors).length;

    console.log(errors)
    const message= errors[""]?.message

    if (errorsLength > 0) {
      toast.error(message ? message.toString() : 'Atenção: Os campos obrigatórios não foram preenchidos!');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FieldStep1 onNext={onNextStep} onClose={onCloseModal} setErrors={checkErrors} />;
      case 2:
        return <FieldStep2 onNext={onNextStep} onClose={onCloseModal} setErrors={checkErrors} />;
      case 3:
        return <FieldStep3 onClose={onCloseModal} onFinish={onCloseModal} setErrors={checkErrors} />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Toast />
      <Header>
        <Button onClick={onOpenModal}>Criar Form</Button>
      </Header>
      <FinishedContent>
        <FinishedFormsList finishedForms={finishedForms} />
      </FinishedContent>
      <Modal open={open} onClose={onCloseModal} center>
        <Title>Ativar o PsicoBank</Title>
        <Progress>
          <ProgressBarComponent currentStep={currentStep} totalSteps={totalSteps} />
        </Progress>
        <SubTitle>Preencha os itens a seguir para configurar o PsicoBank</SubTitle>
        {renderStep()}
      </Modal>
    </Container>
  );
};

export default FormModal;