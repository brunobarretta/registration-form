import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`

export const Header = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FinishedContent = styled.div`
    display: flex;
    flex-wrap: nowrap; 
    overflow-x: auto;
    gap: 20px;
    padding: 10px;
    margin: 0 auto; 
    padding: 0px 20px;

    @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Title = styled.div`
    color: #3D3D3D;
    font-weight: bold;
    max-width: 700px;
    font-size: 24px;
`;

export const SubTitle = styled.div`
    color: #3D3D3D;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 15px;
`;

export const Progress = styled.div`
    margin: 20px 40px 40px 40px;
    padding: 20px;
    box-sizing: border-box;
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