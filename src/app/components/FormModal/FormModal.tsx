'use client'
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import FieldStep1 from '../FieldStep1/FieldStep1';
import FieldStep2 from '../FieldStep2';
import FieldStep3 from '../FieldStep3';
import ProgressBarComponent from '../ProgressBar/ProgressBar';
import { Button, Container, Progress, Title } from './styles';
import { Provider } from 'react-redux';
import store from '@/app/store';

const FormModal = () => {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const onNextStep = () => setCurrentStep(currentStep + 1);
  const onPreviousStep = () => setCurrentStep(currentStep - 1);
  const onCloseModal = () => {
    setCurrentStep(1);
    setOpen(false);
  };
  const onOpenModal = () => setOpen(true);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FieldStep1 onNext={onNextStep} />;
      case 2:
        return <FieldStep2 onNext={onNextStep} onPrevious={onPreviousStep} />;
      case 3:
        return <FieldStep3 onPrevious={onPreviousStep} onClose={onCloseModal} />;
      default:
        return null;
    }
  };

  return (
    <Provider store={store}>
      <Container>
        <Button onClick={onOpenModal}>Abrir modal</Button>
        <Modal open={open} onClose={onCloseModal} center>
          <Title>Ativar o PsicoBank</Title>
          <Progress>
            <ProgressBarComponent currentStep={currentStep} totalSteps={totalSteps} />
          </Progress>
          {renderStep()}
        </Modal>
      </Container>
    </Provider>
  );
};

export default FormModal;