import styled from 'styled-components';

interface IndexedStepProps {
  accomplished: boolean;
}

export const IndexedStep = styled.div<IndexedStepProps>`
  color: white;
  width: 20px;
  height: 20px;
  font-size: 12px;
  background-color: ${({ accomplished }) => accomplished ? 'rgba(0, 116, 217, 1);' : 'rgba(211, 211, 211, 0.8)'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;