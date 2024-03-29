import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Warning = styled.div`
  height: 200px;
  background-color: #FFFAD6;
  border-radius: 5px;
`;

export const TitleWarning = styled.div`
  color: #D2BC1A;
  font-weight: bold;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
`;

export const Select = styled.select`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FlexItem = styled.div`
  flex: 1;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;