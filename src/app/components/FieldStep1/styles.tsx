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
  gap: 4px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<{ hasError: boolean }>`
  height: 32px;
  padding: 4px 16px 4px 16px;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')};
`;

export const InputMasked = styled(InputMask)<{ hasError: boolean }>`
  height: 32px;
  padding: 4px 16px 4px 16px;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')};
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

export const FlexItem = styled.div`
  flex: 1;
  min-width: 200px;
`;

export const Button = styled.button`
  min-width: 133px;
  padding: 4px 32px 4px 32px;
  height: 32px;
  background-color: #2797BA;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #207C97;
  }
`;

export const CancelButton = styled.button`
  min-width: 133px;
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