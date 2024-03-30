import styled from "styled-components";
import InputMask from 'react-input-mask';


export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubTitle = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
`;

export const Info = styled.div`
  background-color: #ECF5FE; 
  border-radius: 5px;
  padding: 10px; 
`;

export const MessageInfo = styled.div`
  color: #2196F3;
  font-weight: 400;
  font-size: 14px;
`;

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
  max-width: 150px;
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

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0px
`;

export const CheckboxInput = styled.input`
  margin-right: 0.5rem;
`;

export const CheckboxTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 14px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px; 
  background-color: #ccc; 
`