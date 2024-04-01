import styled from "styled-components";
import InputMask from 'react-input-mask';


export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
    color: #4C5153;
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
  width: 100%;
  gap: 4px;
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select<{ hasError: boolean }>`
  height: 32px;
  padding: 4px 16px 4px 16px;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')};
  background-color: ${({ disabled }) => (disabled ? '#CCD1D3' : 'white')};
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: end;
`;

export const Input = styled.input`
  height: 32px;
  padding: 4px 16px 4px 16px;
  border: 1px solid #ccc;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-end;
`

export const Button = styled.button`
  min-width: 133px;
  padding: 4px 32px 4px 32px;
  height: 32px;
  background-color: #2797BA;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: #207C97;
  }
`;

export const ButtonIcon = styled.button`
  min-width: 133px;
  padding: 4px 32px 4px 32px;
  height: 32px;
  background-color: white;
  color: #2797BA;
  border: 1px solid #2797BA;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: #DDF2F8;
  }
`;

export const Icon = styled.span`
  margin-right: 8px;
  vertical-align: middle;
`;

export const CancelButton = styled.button`
  padding: 4px 32px 4px 32px;
  height: 32px;
  background-color: white;
  color: #7D8C94;
  border: 1px solid #7D8C94;;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: #3D3D3D;
    border: 1px solid #3D3D3D;
  }
`;