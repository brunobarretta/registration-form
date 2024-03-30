import styled from "styled-components";
import InputMask from 'react-input-mask';


export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Warning = styled.div`
  background-color: #FFFAD6; 
  border-radius: 5px;
  padding: 10px; 
`;

export const TitleWarning = styled.div`
  color: #CCB400;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 10px; 
`

export const WarningUl = styled.ul`
  margin-left: 30px;
`;

export const WarningLi = styled.li`
  color: #CCB400;
  font-weight: 400;
  font-size: 14px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<{ hasError: boolean }>`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')};
`;

export const InputMasked = styled(InputMask)<{ hasError: boolean }>`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')};
`;

export const Select = styled.select<{ hasError: boolean }>`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')};
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: end;
`;

export const FlexItem = styled.div`
  flex: 1;
  min-width: 200px;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2797BA;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #1f7d99;
  }
`;

export const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  color: #8a8a8a;
  border: 1px solid #8a8a8a;;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #e7e4e4;
  }
`;