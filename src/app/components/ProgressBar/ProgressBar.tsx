import React from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import "react-step-progress-bar/styles.css";
import { IndexedStep } from './styles';

const ProgressBarComponent: React.FC<{ currentStep: number, totalSteps: number }> = ({ currentStep, totalSteps }) => {
  const percent = (currentStep / totalSteps) * 100;

  console.log(currentStep)

  return (
    <ProgressBar percent={percent}>
      <Step>
        {({ index }) => (
          <IndexedStep accomplished={index < currentStep}>
            {index + 1}
          </IndexedStep>
        )}
      </Step>
      <Step>
        {({ index }) => (
          <IndexedStep accomplished={index < currentStep}>
          {index + 1}
        </IndexedStep>
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