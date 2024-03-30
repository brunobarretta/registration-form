import React from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import "react-step-progress-bar/styles.css";
import { IndexedStep, TitleStep } from './styles';

const ProgressBarComponent: React.FC<{ currentStep: number, totalSteps: number }> = ({ currentStep, totalSteps }) => {
  const percent = (currentStep / totalSteps) * 100;
  return (
    <ProgressBar percent={percent} filledBackground="#B2DCE8">
      <Step>
        {({ index }) => (
          <>
          <IndexedStep accomplished={index < currentStep}>
            {index + 1}
          </IndexedStep>
          <TitleStep currently={(index + 1) === currentStep} finished={(index + 1) < currentStep}>Cadastrar uma conta</TitleStep>
          </>

        )}
      </Step>
      <Step>
        {({ index }) => (
          <>
            <IndexedStep accomplished={index < currentStep}>
              {index + 1}
            </IndexedStep>
            <TitleStep currently={(index + 1) === currentStep} finished={(index + 1) < currentStep}>Cadastrar uma conta</TitleStep>
          </>
        )}
      </Step>
      <Step>
        {({ index }) => (
          <IndexedStep accomplished={index < currentStep}>
            {index + 1}
          </IndexedStep>
        )}
      </Step>
    </ProgressBar>
  );
};

export default ProgressBarComponent;