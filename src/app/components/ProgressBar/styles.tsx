import styled from 'styled-components';

interface IndexedStepProps {
  accomplished: boolean;
}

interface TitleStepProps {
  currently: boolean;
  finished: boolean;
}

export const IndexedStep = styled.div<IndexedStepProps>`
  color: ${({ accomplished }) => accomplished ? '#2797BA' : 'white'};
  width: 24px;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${({ accomplished }) => accomplished ? '#B2DCE8' : 'rgba(211, 211, 211, 0.8)'};
  border: 2px solid;
  border-color: ${({ accomplished }) => accomplished ? '#2797BA' : 'rgba(211, 211, 211, 0.8)'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleStep = styled.div<TitleStepProps>`
  display: flex;
  position: fixed;
  top: 30px;
  font-size: 11px;
  width: 120px;
  font-weight: ${(props) => (props.currently || props.finished ) ? 'bold' : '400'};
  color: ${props => props.currently ? 'black' : props.finished ? '#2797BA' : 'rgba(211, 211, 211, 0.8)'};
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;